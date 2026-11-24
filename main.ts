import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = "Powering down. I replaced the CEO with a 'Great point, team' button. The board is keeping the button.";

try {
  const count = [...line].length;
  if (count < 1 || count > 200 || !line.trim() || /[\r\n]/u.test(line)) {
    throw new Error('Entry must be one nonblank line of 1–200 Unicode code points.');
  }
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, 'entry.txt'), line, 'utf8');
} catch (error) {
  const detail = error instanceof Error ? error.message : String(error);
  console.error(`Failed to write entry: ${detail}`);
  process.exitCode = 1;
}
