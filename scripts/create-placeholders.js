#!/usr/bin/env node

/**
 * This script creates placeholder SVG images for development.
 * Run: node scripts/create-placeholders.js
 * 
 * Replace these with your real photos before going live!
 */

const fs = require('fs');
const path = require('path');

const placeholders = {
  'public/images/logo.jpg': { w: 200, h: 200, color: '#1F3B2D', text: 'DB', label: 'Logo' },
  'public/images/other/hero.jpg': { w: 1920, h: 1080, color: '#152A1E', text: '🌲', label: 'Hero Image' },
  'public/images/other/welcome.jpg': { w: 800, h: 1000, color: '#1F3B2D', text: '🌿', label: 'Welcome' },
  'public/images/other/welcome2.jpg': { w: 400, h: 400, color: '#2D5640', text: '🍃', label: 'Detail' },
  'public/images/other/about-hero.jpg': { w: 1920, h: 800, color: '#1F3B2D', text: '🏡', label: 'About Hero' },
  'public/images/other/about1.jpg': { w: 800, h: 1000, color: '#2D5640', text: '🌲', label: 'About' },
  'public/images/other/ella.jpg': { w: 800, h: 600, color: '#1A3A2A', text: '⛰️', label: 'Ella' },
  'public/images/other/horton.jpg': { w: 800, h: 600, color: '#1F3B2D', text: '🏔️', label: 'Horton Plains' },
  'public/images/other/tea.jpg': { w: 800, h: 600, color: '#2D5640', text: '🍵', label: 'Tea Estate' },
  'public/images/other/waterfall.jpg': { w: 800, h: 600, color: '#1A3A2A', text: '💧', label: 'Waterfall' },
  'public/images/other/hiking.jpg': { w: 800, h: 600, color: '#1F3B2D', text: '🥾', label: 'Hiking' },
  'public/images/other/viewpoint.jpg': { w: 800, h: 600, color: '#152A1E', text: '🌅', label: 'Viewpoint' },
  'public/images/other/cta-bg.jpg': { w: 1920, h: 800, color: '#0D1F16', text: '🌿', label: 'CTA Background' },
  'public/images/other/contact-hero.jpg': { w: 1920, h: 800, color: '#1F3B2D', text: '📞', label: 'Contact Hero' },
  'public/images/rooms/room1.jpg': { w: 800, h: 600, color: '#1F3B2D', text: '🛏️', label: 'Forest View Suite' },
  'public/images/rooms/room2.jpg': { w: 800, h: 600, color: '#2D5640', text: '🌺', label: 'Garden Bungalow' },
  'public/images/rooms/room3.jpg': { w: 800, h: 600, color: '#152A1E', text: '⛰️', label: 'Mountain Room' },
};

function createSvgPlaceholder(w, h, color, text, label) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${adjustColor(color)};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <text x="${w / 2}" y="${h / 2 - 20}" font-size="${Math.min(w, h) / 6}" text-anchor="middle" dominant-baseline="middle" fill="rgba(255,255,255,0.15)">${text}</text>
  <text x="${w / 2}" y="${h / 2 + 30}" font-family="Georgia, serif" font-size="${Math.min(w, h) / 14}" text-anchor="middle" fill="rgba(201,169,110,0.6)">${label}</text>
  <text x="${w / 2}" y="${h / 2 + 60}" font-family="sans-serif" font-size="${Math.min(w, h) / 20}" text-anchor="middle" fill="rgba(255,255,255,0.25)">Denforet Bungalow</text>
  <text x="${w / 2}" y="${h / 2 + 85}" font-family="sans-serif" font-size="${Math.min(w, h) / 25}" text-anchor="middle" fill="rgba(255,255,255,0.15)">Replace with actual photo</text>
</svg>`;
}

function adjustColor(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgb(${Math.min(255, r + 30)}, ${Math.min(255, g + 30)}, ${Math.min(255, b + 20)})`;
}

let created = 0;
for (const [filePath, { w, h, color, text, label }] of Object.entries(placeholders)) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Create SVG (we can't create real JPGs without extra deps)
  const svgPath = filePath.replace('.jpg', '.svg');
  if (!fs.existsSync(filePath) && !fs.existsSync(svgPath)) {
    fs.writeFileSync(svgPath, createSvgPlaceholder(w, h, color, text, label));
    console.log(`✓ Created: ${svgPath}`);
    created++;
  } else {
    console.log(`  Skipped (exists): ${filePath}`);
  }
}

console.log(`\n✅ Created ${created} placeholder images as SVG files.`);
console.log('\n⚠️  IMPORTANT: Replace all placeholder SVGs with real JPG photos before launch!');
console.log('   The image paths in the code reference .jpg files.');
console.log('   When you add real photos, name them exactly as listed above.\n');
