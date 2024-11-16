/// <reference types="vitest" />
/// <reference types="Vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({
    rollupTypes: true,
  })],
  build: {
    outDir: 'lib',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ButtonChangeStatus',
      fileName: 'button-change-status',
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],

      output: {
        globals: {
          react: 'React',
          reactDOM: 'ReactDom',
          'react/jsx-runtime': 'react/jsx-runtime',
        }
      },
    },
  },

  test: {
    globals: true,
    clearMocks: true,
    environment: 'happy-dom',
  },
})
