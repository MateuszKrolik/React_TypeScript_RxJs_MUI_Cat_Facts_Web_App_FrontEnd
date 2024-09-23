import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import swc from '@rollup/plugin-swc';

const swcPlugin = swc({
  include: /\.(ts|tsx)$/, 
  swc: {
    jsc: {
      parser: {
        syntax: 'typescript',
        tsx: true, 
        dynamicImport: true,
        decorators: true,
      },
      target: 'es2021',
      transform: {
        decoratorMetadata: true,
      },
    },
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    swcPlugin,
  ],
  esbuild: false,
});