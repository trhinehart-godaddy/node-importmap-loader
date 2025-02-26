import { get } from 'node:https';

export const load = function (url: string) {
  return new Promise<string>((resolve, reject) => {
    get(url, (res) => {
      const chunks: Buffer[] = [];
      res.on('data', (chunk: Buffer) => {
        chunks.push(Buffer.from(chunk));
      });
      res.on('end', () => {
        resolve(Buffer.concat(chunks).toString('utf-8'));
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
};