import React from 'react'

import { DocsContainer } from './DocsContainer'

import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react'
import { themes } from '@storybook/theming'
import { withThemes } from '@react-theming/storybook-addon'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { getTheme } from '../src/utils/theme'

import gotaLogoLight from './gota-logo-light.svg'
import gotaLogoDark from './gota-logo-dark.svg'

import { GlobalStyle } from './style'

export const parameters = {
    options: {
        showToolbar: true
    },
    actions: {
        argTypesRegex: "^on[A-Z].*"
    },
    controls: {
        matchers: {
            color: /(background|color|colors|green|red|blue|orange|gray|white|black)+([0-9])?/i,
            date: /Date$/
        }
    },
    backgrounds: {
        default: 'light',
        values: [
            {
                name: 'light',
                value: '#ffffff',
            },
            {
                name: 'dark',
                value: '#2e2e2e',
            }
        ]
    },
    darkMode: {
        dark: {
            ...themes.dark,
            brandImage: gotaLogoLight
        },
        light: {
            ...themes.normal,
            brandImage: gotaLogoDark,
        },
    },
    docs: {
        container: DocsContainer
    },
    viewport: {
        viewports: INITIAL_VIEWPORTS
    }
}

const theme = getTheme()

const fluffyThemes = [
    {
        name: 'Blue',
        ...theme
    },
    {
        name: 'Green',
        ...theme,
        colors: {
            ...theme.colors,
            brand: '#41AD49'
        }
    },
    {
        name: 'Orange',
        ...theme,
        colors: {
            ...theme.colors,
            brand: '#EF7D00'
        }
    },
    {
        name: 'Red',
        ...theme,
        colors: {
            ...theme.colors,
            brand: '#D00019'
        }
    }
]

export const decorators = [
    (Story) => (
        <div>
            <GlobalStyle />
            <Story />
        </div>
    ),
    withThemes(ThemeProvider, fluffyThemes)
]