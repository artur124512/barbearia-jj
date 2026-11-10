import https from 'https';
import fs from 'fs';
import path from 'path';

const url = 'https://drive.google.com/drive/folders/1h6A8IumlTkoxuZF18kbMQqE-DB8pbZ_d';

function fetchUrl(targetUrl) {
  return new Promise((resolve, reject) => {
    https.get(targetUrl, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchUrl(res.headers.location));
      }
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(body));
    }).on('error', reject);
  });
}

async function run() {
  console.log('Fetching Google Drive folder page...');
  const html = await fetchUrl(url);
  
  // Find all file occurrences like data-id="..." data-tooltip="...jpg"
  // Or in script tag: ["id",["filename.jpg"...
  const idRegex = /data-id="([a-zA-Z0-9_-]{25,35})"[^>]*data-tooltip="([^"]+\.jpg)"/gi;
  const items = [];
  let m;
  while ((m = idRegex.exec(html)) !== null) {
    items.push({ id: m[1], name: m[2] });
  }

  // Also check alternative pattern in Drive data payload
  const jsonRegex = /\["([a-zA-Z0-9_-]{33})",\["([^"]+\.(?:jpg|jpeg|png))"/gi;
  while ((m = jsonRegex.exec(html)) !== null) {
    if (!items.find(x => x.id === m[1])) {
      items.push({ id: m[1], name: m[2] });
    }
  }

  // Also check pattern where filename is near ID
  const dscRegex = /data-id="([a-zA-Z0-9_-]{28,35})"[^>]+DSC[0-9]+/gi;
  while ((m = dscRegex.exec(html)) !== null) {
    console.log('Found DSC match:', m[0]);
  }

  console.log(`Found ${items.length} items:`, items);
  fs.writeFileSync('drive-files.json', JSON.stringify(items, null, 2));
}

run().catch(console.error);
