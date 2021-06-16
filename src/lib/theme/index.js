import { extendTheme } from '@chakra-ui/react'
import components from './components'
import colors from './colors'
import fonts from './fonts'

export const defaultTheme = extendTheme({
    config: {
        cssVarPrefix: 'fluffy'
    },
    colors,
    visibility: {
        hidden: 0,
        semi: 0.5,
        visible: 1
    },
    components,
    fonts,
    textAlign: {left: 'left', center: 'center', right: 'right'}
})