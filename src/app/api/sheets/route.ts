import { NextResponse } from 'next/server';
export const runtime = 'edge';

export interface SheetData {
  name: string
  comment: string
  socialUrl?: string
  iconUrl?: string
}

// JWT生成用のヘルパー関数
async function createJWT(privateKey: string, serviceAccountEmail: string) {
  const now = Math.floor(Date.now() / 1000);
  const payload = {
    iss: serviceAccountEmail,
    scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const header = {
    alg: 'RS256',
    typ: 'JWT',
  };

  const encodedHeader = btoa(JSON.stringify(header));
  const encodedPayload = btoa(JSON.stringify(payload));
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;

  // Edge Runtimeでは crypto.subtle を使用
  const keyData = privateKey.replace(/\\n/g, '\n').replace(/-----BEGIN PRIVATE KEY-----/, '').replace(/-----END PRIVATE KEY-----/, '').replace(/\s/g, '');
  const binaryKey = Uint8Array.from(atob(keyData), c => c.charCodeAt(0));
  
  const cryptoKey = await crypto.subtle.importKey(
    'pkcs8',
    binaryKey,
    {
      name: 'RSASSA-PKCS1-v1_5',
      hash: 'SHA-256',
    },
    false,
    ['sign']
  );

  const signature = await crypto.subtle.sign(
    'RSASSA-PKCS1-v1_5',
    cryptoKey,
    new TextEncoder().encode(unsignedToken)
  );

  const encodedSignature = btoa(String.fromCharCode(...new Uint8Array(signature)));
  return `${unsignedToken}.${encodedSignature}`;
}

// アクセストークン取得
async function getAccessToken(privateKey: string, serviceAccountEmail: string) {
  const jwt = await createJWT(privateKey, serviceAccountEmail);
  
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: jwt,
    }),
  });

  const data = await response.json();
  return data.access_token;
}

export async function GET() {
  try {
    // 環境変数の確認
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID

    if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
      console.error('Missing environment variables')
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
    }

    // アクセストークン取得
    const accessToken = await getAccessToken(privateKey, serviceAccountEmail);

    // Google Sheets APIを直接呼び出し
    const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/default!C:F`;
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    const rows = data.values;

    if (!rows || rows.length === 0) {
      return NextResponse.json([])
    }

    // ヘッダー行を除いてデータを整形
    const [, ...dataRows] = rows
    
    const formattedData: SheetData[] = dataRows
      .filter((row: string[]) => row.length >= 3) // 3列すべてにデータがある行のみ
      .map((row: string[]) => ({
        name: row[0] || '',
        comment: row[2] || '',
        socialUrl: row[1] || undefined,
        iconUrl: row[3] || undefined
      }))

    // 1分間キャッシュ（バースト対応）
    return NextResponse.json(formattedData, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, max-age=60, stale-while-revalidate=30'
      }
    })

  } catch (error) {
    console.error('Error fetching spreadsheet data:', error)
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
  }
}
