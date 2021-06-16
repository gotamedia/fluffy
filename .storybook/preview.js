
import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from '../src/lib'

// Call story function in child component so that all components can use theme.
// Notification style will not work if story is called on same level as ThemeProvider is rendered.
const Story = ({ fn }) => (
    <>
        {fn()}
    </>
)

addDecorator((storyFn) => (
  <ThemeProvider>
    <Story fn={storyFn} />
  </ThemeProvider>
))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}