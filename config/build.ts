import { build } from 'https://deno.land/x/esbuild@v0.24.2/mod.js';

/**
 * Build the Phaser code using esbuild
 * @returns {Promise<void>}
 */
export default async function buildPhaser(
  gameEntryPoint: string = 'game/main.ts',
  staticFolderPath: string = 'static',
  outfileName: string = 'main.js'
): Promise<void> {
  await build({
    entryPoints: [gameEntryPoint],
    bundle: true,
    outfile: staticFolderPath + '/' + outfileName,
    write: true,
    format: 'esm',
    minify: true,
    treeShaking: true,
    resolveExtensions: ['.ts', '.js'],
    alias: {
      phaser:
        'https://cdnjs.cloudflare.com/ajax/libs/phaser/3.87.0/phaser.esm.min.js',
    },
    target: ['esnext'],
  });
}
