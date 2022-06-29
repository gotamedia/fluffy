import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import visualizer from 'rollup-plugin-visualizer'
import ttypescript from 'ttypescript'
import tsPlugin from 'rollup-plugin-typescript2'

const packageJson = require('./package.json')

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            external(),
            terser(),
            resolve(),
            commonjs(),
            visualizer(),
            tsPlugin({
                typescript: ttypescript
            })
        ],
        external: [
            'react',
            'react-dom',
            'styled-components'
        ]
    }
]