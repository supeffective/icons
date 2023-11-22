import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: {
      index: './src/index.ts',
    },
    outDir: './dist',
    format: ['esm'],
    target: 'es2021',
    ignoreWatch: ['**/dist/**', '**/node_modules/**', '*.test.ts'],
    clean: true,
    dts: true,
    sourcemap: true,
    splitting: true,
    minify: false,
    skipNodeModulesBundle: true,
    external: ['node_modules', 'react', 'react-dom', 'react/jsx-runtime', 'react/jsx-dev-runtime'],
  },
])
