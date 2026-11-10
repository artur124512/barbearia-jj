import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const htmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(htmlPath)) {
  console.error('dist/index.html not found. Run build first.');
  process.exit(1);
}

let html = fs.readFileSync(htmlPath, 'utf-8');

// 1. Remove any fallback redirect scripts
html = html.replace(/<script[^>]*>\s*if\s*\(window\.location\.protocol\s*===[\s\S]*?<\/script>/gi, '');

// 2. Find and inline CSS into <head>
const cssFiles = fs.readdirSync(path.join(distDir, 'assets')).filter(f => f.endsWith('.css'));
if (cssFiles.length > 0) {
  const cssContent = fs.readFileSync(path.join(distDir, 'assets', cssFiles[0]), 'utf-8');
  html = html.replace(/<link rel="stylesheet"[^>]*>/i, () => `<style>\n${cssContent}\n</style>`);
}

// 3. Find JS bundle
const jsFiles = fs.readdirSync(path.join(distDir, 'assets')).filter(f => f.endsWith('.js'));
if (jsFiles.length > 0) {
  const jsContent = fs.readFileSync(path.join(distDir, 'assets', jsFiles[0]), 'utf-8');
  
  // Remove the old script tag from <head>
  html = html.replace(/<script type="module"[^>]*src="[^"]+"[^>]*><\/script>/i, '');
  
  // Append script at the end of <body> after <div id="root">
  const scriptTag = `\n<script type="text/javascript">\n${jsContent}\n</script>\n</body>`;
  html = html.replace(/<\/body>/i, () => scriptTag);
}

// 4. Remove modulepreloads
html = html.replace(/<link rel="modulepreload"[^>]*>/gi, '');

// Ensure images folder is copied to dist/images as well
if (fs.existsSync('public/images') && !fs.existsSync('dist/images')) {
  fs.cpSync('public/images', 'dist/images', { recursive: true });
}

// Save to dist/index-standalone.html
fs.writeFileSync(path.join(distDir, 'index-standalone.html'), html, 'utf-8');

// Also save to root as 'abrir-direto-no-navegador.html'
fs.writeFileSync(path.resolve('abrir-direto-no-navegador.html'), html, 'utf-8');

console.log('✅ Standalone file successfully generated: abrir-direto-no-navegador.html (' + (Buffer.byteLength(html) / 1024).toFixed(1) + ' KB)');
