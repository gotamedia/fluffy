import ThemeGenerator from '.'

import type { Story } from '@storybook/react'

const Basic: Story = () => {
    return (
        <ThemeGenerator />
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'ThemeGenerator'

export {
    BasicStory
}

export default {
    title: 'Theme/Generator',
    component: ThemeGenerator,
    argTypes: {},
    args: {},
    parameters: {
        options: {
            showToolbar: false,
            showPanel: false
        }
    }
}