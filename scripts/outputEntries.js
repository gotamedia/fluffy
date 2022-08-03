const outputEntries = (entries = []) => {
    const entriesBluePrint = {}
    
    entries.forEach(entry => {
        const entryPath = entry.replace('./src/', '')
    
        const entryType = entryPath.match(/^[^/]*/)[0]
        const path = entryPath.replace(entryType, '')
    
        entriesBluePrint[entryType] = [
            ...(entriesBluePrint[entryType] || []),
            path
        ]
    })
    
    console.log(`-------------------------------------------------`)
    console.log(`Entries Overview:\n`)
    
    Object.entries(entriesBluePrint).forEach(item => {
        console.log(`--- ${item[0]}:`)
        item[1].forEach(i => console.log(`\t ${i}\n`))
    })
    
    console.log(`-------------------------------------------------`)
}

export default outputEntries