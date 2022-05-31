const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const replaceAll = (string: string, find: string, replace: string) =>
    string.replace(new RegExp(escapeRegExp(find), 'g'), replace)

export default replaceAll
