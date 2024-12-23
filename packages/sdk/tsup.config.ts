import { defineConfig } from 'tsup'

export default defineConfig((options) => {
  return {
    entry: ['src/index.ts'],
    outDir: 'dist',
    dts: true,
    sourcemap: !options.watch,
    clean: true,
    minify: true,
    splitting: false,
    format: ['cjs', 'esm'],
  }
})
