import { cpSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const studioDist = join(root, 'studio-klik', 'dist');
const target = join(root, 'dist', 'sanity.studio');

if (!existsSync(studioDist)) {
  console.error('Studio build not found. Run: cd studio-klik && npm run build');
  process.exit(1);
}

cpSync(studioDist, target, { recursive: true });
console.log('Copied studio-klik/dist -> dist/sanity.studio');
