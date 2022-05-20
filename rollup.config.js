import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import visualizer from 'rollup-plugin-visualizer'
import ttypescript from 'ttypescript'
import tsPlugin from 'rollup-plugin-typescript2'

// import buildEntries from './buildEntries'

export default async () => {
    // const entries = await buildEntries('src')

    const config = [
        {
            input: 'src/index.ts',
            output: [
                {
                    dir: '_temp_dist_',
                    format: 'cjs',
                    exports: 'auto',
                    preserveModules: true
                }
            ],
            plugins: [
                external(),
                terser(),
                resolve(),
                visualizer(),
                commonjs(),
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

    return config
}