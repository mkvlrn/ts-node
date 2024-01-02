import { exec } from 'node:child_process';
import { readdir, rm } from 'node:fs/promises';
import esbuild from 'esbuild';

// clear build folder
await rm('./build', { recursive: true, force: true });

// actual transpiling
await esbuild.build({
  entryPoints: ['./src/*.ts', './src/**/*.ts'],
  bundle: false,
  outdir: './build',
  platform: 'node',
  target: 'node20',
  format: 'esm',
});

// run tsc-alias
await new Promise((resolve, reject) => {
  exec('tsc-alias', (err, stdout) => {
    if (err) {
      console.error(err);
      reject(err);
    }
    resolve(stdout);
  });
});

// delete *.test.js files from build folder
const files = await readdir('./build', { recursive: true });
await Promise.all(
  files.filter((file) => file.endsWith('.test.js')).map((file) => rm(`./build/${file}`)),
);
