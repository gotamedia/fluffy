import React from 'react'
import { themes } from '@storybook/theming'

import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import { getTheme } from '../src/utils/theme'

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
            color: /(background|color)$/i,
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
    docs: {
        theme: themes.dark
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

addDecorator(withThemes(ThemeProvider, [theme]))