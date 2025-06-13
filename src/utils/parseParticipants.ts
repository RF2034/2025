import { promises as fs } from 'fs';
import path from 'path';

export interface Participant {
  name: string;
  comment: string;
}

export async function getParticipants(): Promise<Participant[]> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'participants.tsv');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    
    const lines = fileContent.trim().split('\n');
    const headers = lines[0].split('\t');
    
    return lines.slice(1).map(line => {
      const values = line.split('\t');
      return {
        name: values[0] || '',
        comment: values[1] || '',
      };
    });
  } catch (error) {
    console.error('参加者データの読み込みに失敗しました:', error);
    return [];
  }
}
