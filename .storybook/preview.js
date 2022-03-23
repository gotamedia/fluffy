import { themes } from '@storybook/theming'

import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react'
import { withThemes } from '@react-theming/storybook-addon'

import { getTheme } from '../src/lib/utils/theme'

export const parameters = {
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
    }
}

const theme = getTheme()

addDecorator(withThemes(ThemeProvider, [theme]))