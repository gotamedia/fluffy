import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import css from 'rollup-plugin-import-css'
import { terser } from 'rollup-plugin-terser'
import external from 'rollup-plugin-peer-deps-external'
import visualizer from 'rollup-plugin-visualizer'
import ttypescript from 'ttypescript'
import typescript from '@rollup/plugin-typescript'
import renameNodeModules from 'rollup-plugin-rename-node-modules'

import generateEntries from './scripts/generateEntries'
import outputEntries from './scripts/outputEntries'

const entries = [
    'src/index.ts',
    ...generateEntries('./src/components'),
    ...generateEntries('./src/hooks'),
    ...generateEntries('./src/utils'),
    ...generateEntries('./src/contexts'),
    ...generateEntries('./src/packages', ['.ts'])
]

outputEntries(entries)

export default {
    input: entries,
    output: [
        {
            dir: 'dist',
            format: 'esm',
            preserveModules: true,
            preserveModulesRoot: 'src'
        }
    ],
    plugins: [
        external(),
        terser(),
        resolve(),
        commonjs(),
        visualizer({
            title: 'Fluffy Bundle Visualizer',
            filename: 'fluffy-bundle-visualizer.html'
        }),
        css(),
        typescript({
            typescript: ttypescript,
            rootDir: 'src',
            exclude: [
                '**/**/*.cy.tsx'
            ]
        }),
        renameNodeModules('external', false)
    ],
    external: [
        'react',
        'react-dom',
        'styled-components',
        'polished',
        'react-intersection-observer',
        'scroll-into-view-if-needed'
    ]
}