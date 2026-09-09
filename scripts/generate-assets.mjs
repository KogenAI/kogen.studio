import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

await sharp('src/assets/workbench.png').resize(1280, 640, { fit: 'contain', background: '#ffffff' }).png().toFile('public/social.png');
const favicon = await sharp('public/favicon.svg').resize(32, 32).png().toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header[6] = 32;
header[7] = 32;
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(favicon.length, 14);
header.writeUInt32LE(22, 18);
await writeFile('public/favicon.ico', Buffer.concat([header, favicon]));
await sharp('public/favicon.svg').resize(120, 120).extend({ top: 30, bottom: 30, left: 30, right: 30, background: '#ffffff' }).flatten({ background: '#ffffff' }).png().toFile('public/apple-touch-icon.png');
