import React from 'react'
import merge from 'lodash/merge'

import { addDecorator } from '@storybook/react'
import { themes } from '@storybook/theming'
import { withThemes } from '@react-theming/storybook-addon'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import gotaLogoLight from './gota-logo-light.svg'
import gotaLogoDark from './gota-logo-dark.svg'

import { getTheme } from '../src/utils/theme'
import { ThemeProvider } from '../src/contexts/ThemeContext'

import { DocsContainer } from './DocsContainer'

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
                name: 'dark',
                value: '#2e2e2e',
            },
            {
                name: 'light',
                value: '#ffffff',
            },
        ],
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

export const decorators = [
    (Story) => (
        <div>
            <GlobalStyle />
            <Story />
        </div>
    )
]

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

const providerFn = (props) => {
    const selectedTheme = fluffyThemes.find(i => i.name === props.theme.name)
    
    return (
        <ThemeProvider theme={selectedTheme}>
            {props.children}
        </ThemeProvider>
    )
}

addDecorator(withThemes(null, merge([], fluffyThemes), { providerFn }))