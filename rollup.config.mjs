import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';

const plugins = [
  resolve(),
  commonjs(),
  babel({
    babelHelpers: 'bundled',
    presets: ['@babel/preset-env', '@babel/preset-react'],
    exclude: 'node_modules/**',
  }),
  json(),
];

export default [
  {
    input: 'index.js',
    output: {
      file: 'dist/wfd5-plugin.iife.js',
      format: 'iife',
      name: 'PluginRegister',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-plotly.js': 'Plotly',
      },
    },
    external: ['react', 'react-dom', 'react-plotly.js'],
    plugins,
  },
  {
    input: 'index.js',
    output: {
      file: 'dist/wfd5-plugin.es.js',
      format: 'es',
    },
    external: ['react', 'react-dom', 'react-plotly.js'],
    plugins,
  },
];
