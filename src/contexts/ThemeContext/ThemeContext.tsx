import { useMemo } from 'react'

import {
    ThemeContext as ThemeContextSC,
    ThemeProvider as ThemeProviderSC
} from 'styled-components'

import merge from 'lodash/merge'

import { getTheme } from '@utils/theme'

import type {
    FC,
    ReactNode,
} from 'react'
import type { FluffyTheme } from '@utils/theme'
import type { DeepPartial } from '@root/types/utils'

const ThemeContext = ThemeContextSC

const ThemeProvider: FC<{ children: ReactNode, theme?: DeepPartial<FluffyTheme> }> = ({ children, theme }) => {
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