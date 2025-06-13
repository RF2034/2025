import { promises as fs } from 'fs';
import path from 'path';

export interface Participant {
  name: string;
  comment: string;
  twitterUrl?: string;
}

export async function getParticipants(): Promise<Participant[]> {

  const filePath = path.join(process.cwd(), 'data', 'participants.tsv');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  
  const lines = fileContent.trim().split('\n');
  
  return lines.slice(1).map(line => {
    const values = line.split('\t');
    return {
      name: values[0] || '',
      comment: values[1] || '',
      twitterUrl: values[2] || undefined,
    };
  });

}
