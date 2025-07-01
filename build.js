#!/usr/bin/env node

// Simple build script for Vercel deployment
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

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

// List built files
console.log('Built files:');
const files = fs.readdirSync(outputDir, { recursive: true });
files.forEach(file => {
  console.log('  ', file);
});

console.log('Build completed successfully');