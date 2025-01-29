import { build } from 'esbuild';

/**
 * Build the Phaser code using esbuild
 * @returns {Promise<void>}
 */
export async function buildPhaser(): Promise<void> {
  await build({
    entryPoints: ['game/main.ts'],
    bundle: true,
    outfile: Deno.env.get('STATIC_FOLDER') ?? 'build/static' + '/main.js',
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

await buildPhaser();
