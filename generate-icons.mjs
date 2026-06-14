// generate-icons.mjs
// Run once after npm install: node generate-icons.mjs
// Requires: npm install canvas --save-dev

import { createCanvas } from 'canvas';
import { writeFileSync } from 'fs';

function drawIcon(size) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  const r = size * 0.15;

  // Rounded background
  ctx.fillStyle = '#232f3e';
  ctx.beginPath();
  ctx.moveTo(r, 0);
  ctx.lineTo(size - r, 0);
  ctx.quadraticCurveTo(size, 0, size, r);
  ctx.lineTo(size, size - r);
  ctx.quadraticCurveTo(size, size, size - r, size);
  ctx.lineTo(r, size);
  ctx.quadraticCurveTo(0, size, 0, size - r);
  ctx.lineTo(0, r);
  ctx.quadraticCurveTo(0, 0, r, 0);
  ctx.closePath();
  ctx.fill();

  // "orderly" text
  ctx.fillStyle = '#ff9900';
  ctx.font = `900 ${size * 0.28}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('orderly', size / 2, size * 0.45);

  // dot
  ctx.fillStyle = '#ffffff';
  ctx.beginPath();
  ctx.arc(size * 0.76, size * 0.62, size * 0.045, 0, Math.PI * 2);
  ctx.fill();

  return canvas.toBuffer('image/png');
}

writeFileSync('public/pwa-192.png', drawIcon(192));
writeFileSync('public/pwa-512.png', drawIcon(512));
writeFileSync('public/apple-touch-icon.png', drawIcon(180));

console.log('✅ Icons generated: pwa-192.png, pwa-512.png, apple-touch-icon.png');
