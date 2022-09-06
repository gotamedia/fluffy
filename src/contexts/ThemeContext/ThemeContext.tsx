import { useMemo } from 'react'

import {
    ThemeContext as ThemeContextSC,
    ThemeProvider as ThemeProviderSC
} from 'styled-components'

import merge from 'lodash/merge'

import { getTheme } from '@utils/theme'

import type { DefaultTheme } from 'styled-components'
import type {
    FC,
    ReactNode,
} from 'react'

const ThemeContext = ThemeContextSC

const ThemeProvider: FC<{ children: ReactNode, theme?: DefaultTheme }> = ({ children, theme }) => {
    const themeValue = useMemo(() => {
        return merge({}, getTheme(), theme)
    }, [theme])

    return (
        <ThemeProviderSC theme={themeValue}>
            {children}
        </ThemeProviderSC>
    )
}

export {
    ThemeContext,
    ThemeProvider
}

export default ThemeContext