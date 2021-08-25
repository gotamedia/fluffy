import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'
import visualizer from 'rollup-plugin-visualizer'

export default {
  input: './src/lib/index.js',
  output: [
    {
        dir: 'dist/cjs',
        format: 'cjs'
    },
    {
        dir: 'dist/esm',
        format: 'esm'
    }
  ],
  plugins: [
    external(),
    babel({
        exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    visualizer()
  ]
}