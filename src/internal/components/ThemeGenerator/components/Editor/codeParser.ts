//@ts-ignore
import { transform, registerPlugin } from '@babel/standalone'

import {
    createTheme,
    getTheme
} from '@utils/theme'

const themeGeneratorParserPlugin = ({ types }: any) => {
    return {
        visitor: {
            ExportDefaultDeclaration(path: any) {
                path.replaceWith(types.returnStatement(path.node.declaration))
            }
        }
    }
}

registerPlugin('themeGeneratorParserPlugin', themeGeneratorParserPlugin)

const parse = (codeString: string) => {
    try {
        const { code } = transform(codeString, {
            filename: 'index.tsx',
            presets: [
                'typescript',
                'react'
            ],
            plugins: [
                'themeGeneratorParserPlugin'
            ]
        })

        return {
            error: null,
            code: code
        }
    } catch (error) {
        return {
            error: error,
            code: null
        }
    }
}

const getInstance = (parsedCode: string) => {
    try {
        const instance = new Function(
            'createTheme',
            'getTheme',
            parsedCode
        )(
            createTheme,
            getTheme
        )

        return {
            error: null,
            instance: instance
        }
    } catch (error) {
        return {
            error: error,
            instance: null
        }
    }
}

export {
    parse,
    getInstance
}