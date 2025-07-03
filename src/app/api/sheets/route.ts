import { google } from 'googleapis';
import { NextResponse } from 'next/server';
export const runtime = 'edge';

export interface SheetData {
  name: string
  comment: string
  socialUrl?: string
  iconUrl?: string
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

    // Google Sheets API認証
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: privateKey.replace(/\\n/g, '\n'), // 改行文字を正しく処理
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    })

    const sheets = google.sheets({ version: 'v4', auth })

    // スプレッドシートからデータを取得
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: spreadsheetId,
      range: 'default!C:F', // シート名とカラム範囲を指定（4列目まで取得）
    })

    const rows = response.data.values

    if (!rows || rows.length === 0) {
      return NextResponse.json([])
    }

    // ヘッダー行を除いてデータを整形
    const [, ...dataRows] = rows
    
    const formattedData: SheetData[] = dataRows
      .filter(row => row.length >= 3) // 3列すべてにデータがある行のみ
      .map(row => ({
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
