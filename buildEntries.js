import fs from 'fs'
import { resolve } from 'path'

const { readdir } = fs.promises

const buildEntries = async (rootDir) => {
    const entries = {}

    const BLUE_PRINT = [
        {
            key: 'components',
            path: resolve(__dirname, rootDir, 'components'),
            blackList: []
        },
        {
            key: 'contexts',
            path: resolve(__dirname, rootDir, 'contexts'),
            blackList: []
        },
        {
            key: 'hooks',
            path: resolve(__dirname, rootDir, 'hooks'),
            blackList: []
        },
        {
            key: 'utils',
            path: resolve(__dirname, rootDir, 'utils'),
            blackList: [
                'tests'
            ]
        }
    ]

    for (const entry of BLUE_PRINT) {
        try {
            const files = await readdir(entry.path, { withFileTypes: true })

            for (const file of files) {
                if (!entry.blackList.includes(file.name)) {
                    let entryFilePath = `${rootDir}/${entry.key}/${file.name}`
                    const entryFileName = file.name.replace('.ts', '')

                    if (file.isDirectory()) {
                        entryFilePath = `${entryFilePath}/index.ts`
                    }

                    entries[entryFileName] = entryFilePath
                }
            }
        } catch (error) {
            console.log(`Failed to scan entry: `, entry)
            throw Error(error)
        }
    }

    return entries
}

export default buildEntries