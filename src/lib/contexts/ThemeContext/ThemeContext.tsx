import { useMemo } from 'react'

import {
    ThemeContext as TC,
    ThemeProvider as TP
} from 'styled-components'

import merge from 'lodash/merge'

import { getTheme } from '@utils/theme'

import type {
    FC,
    ReactNode,
} from 'react'

const ThemeContext = TC

const ThemeProvider: FC<{ children: ReactNode, theme?: Record<string, unknown> }> = ({ children, theme }) => {
    const themeValue = useMemo(() => {
        return merge(getTheme(), theme)
    }, [theme])

    return (
        <TP theme={themeValue}>
            {children}
        </TP>
    )
}

export {
    ThemeContext,
    ThemeProvider
}