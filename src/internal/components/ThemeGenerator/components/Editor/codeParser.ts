//@ts-ignore
import { transform, registerPlugin } from '@babel/standalone'

import { createTheme } from '@utils/theme'

const plugin = ({ types }: any) => {
    return {
        visitor: {
            ExportDefaultDeclaration(path: any) {
                path.replaceWith(types.returnStatement(path.node.declaration))
            }
        }
    }
}

registerPlugin('plugin', plugin)

const parse = (codeString: string) => {
    try {
        const { code } = transform(codeString, {
            filename: 'index.tsx',
            presets: ['typescript', 'react'],
            plugins: ['plugin']
        })

        return code
    } catch (error) {
        console.error('CodeParser / Error parsing code: ', error)
        return ''
    }
}

const getInstance = (parsedCode: string) => {
    try {
        const theme = new Function('createTheme', parsedCode)(createTheme)

        return theme
    } catch (error) {
        console.error('CodeParser / Error getting instance: ', error)
        return null
    }
}

export {
    parse,
    getInstance
}