import React from 'react'

import IconButton, { IconButtonShapes } from './'
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
    component: IconButton,
    argTypes: {},
    args: {
        variant: 'primary',
        size: 'normal',
        icon: Icons.Eye,
        shape: IconButtonShapes.Square,
        disabled: false
    }
} as Meta<typeof IconButton>