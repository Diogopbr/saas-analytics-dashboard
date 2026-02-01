const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, '..', 'public', 'screenshots');
if (!fs.existsSync(dir)) {
  console.error('screenshots dir not found:', dir);
  process.exit(1);
}

const files = fs.readdirSync(dir).filter((f) => f.endsWith('.svg'));

(async () => {
  for (const f of files) {
    const inPath = path.join(dir, f);
    const outName = f.replace(/\.svg$/, '.png');
    const outPath = path.join(dir, outName);
    try {
      const svg = fs.readFileSync(inPath);
      await sharp(svg).png().resize(1200, 700, { fit: 'contain' }).toFile(outPath);
      console.log('Converted', inPath, '->', outPath);
    } catch (err) {
      console.error('Failed convert', inPath, err);
    }
  }
})();
