import { defineConfig } from 'vite';

import path from 'path';

import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import svgr from 'vite-plugin-svgr';

interface ViteConfigArgsType {
  mode: 'production' | 'development';
  command: string;
}

export default ({ mode }: ViteConfigArgsType) =>
  defineConfig({
    base: './',
    plugins: [
      react(),
      svgr(),
      checker({
        typescript: true,
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
      },
    },
    css: {
      modules: {
        generateScopedName:
          mode === 'development' ? '[name]_[local]__[hash:base64:5]' : '[name]__[hash:base64:5]',
      },
    },
  });
