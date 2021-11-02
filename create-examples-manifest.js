const glob = require('glob')
const { writeFile, readFileSync } = require('fs')

let examples = {}

glob("**/*.example.js", (er, files) => {
    files.forEach(file => {
        const parts = file.split('/').slice(1)

        const categoryName = parts[1]
        const componentName = parts[2]
        const category = examples[categoryName] || {}
        const jsxString = readFileSync(file, 'utf-8')

        examples = {
            ...examples,
            [categoryName]: {
                ...category,
                [componentName.replace('.example.js', '')]: {
                    path: `./${parts.join('/')}`,
                    jsxString
                }
            }
        }
    })

    writeFile('./src/examples.json', JSON.stringify(examples, null, 4), () => {})
})