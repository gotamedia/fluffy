import IconButton from './'
import { IconButton as Component } from './IconButton'

import { Icons } from '../Icon'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Basic: Story<Types.IconButtonProps> = (props) => {
    return (
        <IconButton {...props} />
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Components/IconButton',
    component: Component,
    argTypes: {},
    args: {
        icon: Icons.Eye,
        disabled: false
    }
} as Meta<Types.IconButtonComponent>