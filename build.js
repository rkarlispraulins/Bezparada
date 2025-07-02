#!/usr/bin/env node

// Simple build script for Vercel deployment
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('Starting Vercel build...');

// Run vite build
console.log('Building frontend...');
execSync('vite build', { stdio: 'inherit' });

// Ensure output directory exists
const outputDir = path.join(__dirname, 'dist', 'public');
if (!fs.existsSync(outputDir)) {
  console.error('Build output directory not found:', outputDir);
  process.exit(1);
}

// Copy favicon files from client/public to dist/public
console.log('Copying favicon files...');
const clientPublicDir = path.join(__dirname, 'client', 'public');
if (fs.existsSync(clientPublicDir)) {
  const faviconFiles = fs.readdirSync(clientPublicDir);
  faviconFiles.forEach(file => {
    const srcPath = path.join(clientPublicDir, file);
    const destPath = path.join(outputDir, file);
    fs.copyFileSync(srcPath, destPath);
    console.log(`  Copied ${file}`);
  });
} else {
  console.log('  No favicon files found in client/public');
}

// List built files
console.log('Built files:');
const files = fs.readdirSync(outputDir, { recursive: true });
files.forEach(file => {
  console.log('  ', file);
});

console.log('Build completed successfully');