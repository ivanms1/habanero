import { defineConfig } from 'tsup';
import { sassPlugin } from 'esbuild-sass-plugin';
import postcss from 'postcss';
import autoprefixer from 'autoprefixer';
import postcssPresetEnv from 'postcss-preset-env';
import tailwindcss from 'tailwindcss';

export default defineConfig({
  entry: ['index.css', 'index.tsx'],
  external: ['react'],
  format: ['esm', 'cjs'],
  dts: true,
  esbuildPlugins: [
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([
          tailwindcss,
          autoprefixer,
          postcssPresetEnv({ stage: 0 }),
        ]).process(source);
        return css;
      },
    }),
  ],
});
