import fs from 'fs'

const include = ['index.ts']
const exclude = ['.stories.tsx', '.test.tsx', '.cy.tsx', 'WithThemeProvider.tsx']

const generateEntries = (entry, includePatern = include, excludePattern = exclude) => {
    let fileNames = []
    const dirs = fs.readdirSync(entry)

    dirs.forEach((dir) => {
        const path = `${entry}/${dir}`

        if (fs.lstatSync(path).isDirectory()) {
            fileNames = [
                ...fileNames,
                ...generateEntries(path, includePatern, excludePattern),
            ]

            return
        }

        if (!excludePattern.some((exclude) => dir.endsWith(exclude))
            && includePatern.some((ext) => dir.endsWith(ext))
        ) {
            fileNames.push(path)
        }
    })

    return fileNames
}

export default generateEntries