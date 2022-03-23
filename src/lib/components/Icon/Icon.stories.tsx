import React from 'react'
import { Story, Meta } from '@storybook/react'

import Icon from './Icon'
import * as Types from './types'

export default {
    title: 'Components/Icon',
    component: Icon,
    argTypes: {
    },
} as Meta<typeof Icon>

const Template: Story<Types.IconProps> = (props) => {
    return (
        <Icon {...props}/>
    )
}

export const Basic = Template.bind({})
Basic.args = {
    size: Types.IconSizes.Huge,
    icon: Types.Icons.Barometern
}