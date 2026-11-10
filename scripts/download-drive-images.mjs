import fs from 'fs';
import path from 'path';
import https from 'https';

const files = [
  { id: '1TKdra7TF-PmMXpxz3ba1e_bgu6tRCxri', name: '1-DSC00853.jpg' },
  { id: '1JqECbIQWaBmRonGbw8ir4ntHG4c956eU', name: '2-DSC00856.jpg' },
  { id: '1qaSoowTSLUEOLcNbdY5FQYKT0g2_cbFC', name: '3-DSC00857.jpg' },
  { id: '1dlFNFieoGpWSC9FHT37vIXZYh36qX43P', name: '4-DSC00860.jpg' },
  { id: '1u_VDmLCNEov79PfS28Yw_7qNSu10yZG9', name: '5-DSC00861.jpg' },
  { id: '16pMeiw11asLOUpRbP-Snp2lcL4T1hqBd', name: '6-DSC00862.jpg' },
  { id: '1cxLmEw-JhXsv8lD9HirLtw13VARWINnP', name: '7-DSC00864.jpg' },
  { id: '1tGG-Uv-Pk7_OInj-UE2SxYkB0YP9R_py', name: '8-DSC00866.jpg' },
  { id: '1isTDKFms8rZMbwJs77fJ4XXaqza0NvNM', name: '9-DSC00868.jpg' },
  { id: '1DSWvy7gnlqWBJFCKwWenKMrQjDp3Fhip', name: '10-DSC00870.jpg' },
  { id: '1T8JMYoD0-SlnGVIdDR-k2bYQBMzyKpiz', name: '11-DSC00874.jpg' },
  { id: '131mrFCdGkYpwFpNSzdTzeNR5plDF0O4C', name: 'DSC00880.jpg' },
  { id: '1TSFuQ4QHt5kXPrQ_42uClAumV4my839o', name: 'DSC01721.jpg' },
  { id: '1wGO9gKsFOH9wAjmWdXcsDTwuDaiAanmu', name: 'DSC01723.jpg' },
];

const destDir = path.resolve('public', 'images');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function download(file) {
  return new Promise((resolve, reject) => {
    // Try Google User Content CDN
    const url = `https://lh3.googleusercontent.com/d/${file.id}=w1600`;
    const dest = path.join(destDir, file.name);

    function fetch(u) {
      https.get(u, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetch(res.headers.location);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`Failed with status ${res.statusCode} for ${file.name}`));
        }
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          const size = fs.statSync(dest).size;
          console.log(`Downloaded ${file.name} (${(size / 1024).toFixed(1)} KB)`);
          resolve();
        });
      }).on('error', reject);
    }

    fetch(url);
  });
}

async function main() {
  for (const f of files) {
    try {
      await download(f);
    } catch (e) {
      console.warn(`Failed downloading ${f.name}:`, e.message);
    }
  }
  console.log('Finished downloading Drive images.');
}

main();
