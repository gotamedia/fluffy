import { Story, Meta } from '@storybook/react'

import Tag from './index'
import { Tag as Component } from './Tag'

import * as Types from './types'

const Template: Story<Types.TagProps> = (props) => {
    return (
        <div>
            <Tag {...props}>
                
            </Tag>
        </div>
    )
}

export const Basic = Template.bind({})
Basic.args = {
    
}

export default {
    title: 'Developments/Components/Tag',
    component: Component,
    argTypes: {
    },
    args: {
        label: 'Article',
        size: 'normal'
    }
} as Meta<Types.TagComponent>