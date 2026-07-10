import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, parse, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PUBLIC_DIR = join(__dirname, '..', 'public');

// Files to optimize — we'll convert these specific ones
const TARGETS = [
  { name: 'commit_icon.png', sizes: [{ width: 256 }, { width: 64 }] }, // used as favicon — 256px and 64px
  { name: 'commit_3.png', sizes: [{ width: 512 }] }, // OG/social image — 512px
  { name: 'website.png', sizes: [{ width: 800 }] }, // project card — 800px
  { name: 'storybook.png', sizes: [{ width: 800 }] }, // project card — 800px
  { name: 'discord-bot.png', sizes: [{ width: 800 }] }, // project card — 800px
  { name: 'bruno.jpg', sizes: [{ width: 560 }] }, // team photo — 280px container, 2x for retina = 560px
];

async function optimizeImage(filename, outputSizes) {
  const inputPath = join(PUBLIC_DIR, filename);
  const { name } = parse(filename);
  const originalSize = (await stat(inputPath)).size;
  console.log(`\nProcessing: ${filename} (${(originalSize / 1024).toFixed(1)} KB)`);

  for (const { width } of outputSizes) {
    // WebP output
    const webpPath = join(PUBLIC_DIR, `${name}_${width}w.webp`);
    await sharp(inputPath)
      .resize(width, undefined, { withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(webpPath);
    const webpSize = (await stat(webpPath)).size;
    console.log(
      `  WebP ${width}w: ${(webpSize / 1024).toFixed(1)} KB (${((1 - webpSize / originalSize) * 100).toFixed(0)}% smaller)`
    );

    // AVIF output (better compression but slower decode)
    const avifPath = join(PUBLIC_DIR, `${name}_${width}w.avif`);
    await sharp(inputPath)
      .resize(width, undefined, { withoutEnlargement: true })
      .avif({ quality: 50, effort: 4 })
      .toFile(avifPath);
    const avifSize = (await stat(avifPath)).size;
    console.log(
      `  AVIF ${width}w: ${(avifSize / 1024).toFixed(1)} KB (${((1 - avifSize / originalSize) * 100).toFixed(0)}% smaller)`
    );
  }
}

async function main() {
  console.log('🔧 CommitPT Image Optimizer\n');
  console.log(`Output directory: ${PUBLIC_DIR}\n`);

  for (const { name, sizes } of TARGETS) {
    try {
      await optimizeImage(name, sizes);
    } catch (err) {
      console.error(`  Failed to process ${name}:`, err.message);
    }
  }

  // Calculate total savings
  let totalOriginal = 0;
  let totalOptimized = 0;
  for (const { name, sizes } of TARGETS) {
    try {
      totalOriginal += (await stat(join(PUBLIC_DIR, name))).size;
      for (const { width } of sizes) {
        totalOptimized += (await stat(join(PUBLIC_DIR, `${parse(name).name}_${width}w.webp`))).size;
      }
    } catch {}
  }

  console.log(`\n✅ Done! Total original: ${(totalOriginal / 1024 / 1024).toFixed(1)} MB`);
  console.log(`   Total optimized (webp): ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(
    `   Savings: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(0)}%`
  );
}

main().catch(console.error);