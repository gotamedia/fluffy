import React from 'react'
import styled from 'styled-components'

import Icon, { Icons } from './'
import * as Types from './types'
import type { Story, Meta } from '@storybook/react'

export default {
    title: 'Components/Icon',
    component: Icon,
    argTypes: {
    },
} as Meta<typeof Icon>

const Basic: Story<Types.IconProps> = (props) => {
    return (
        <Icon {...props}/>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

Basic.args = {
    size: Types.IconSizes.Huge,
    icon: Types.Icons.Barometern
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;

    span {
        padding: 25px;
        margin: auto;
        min-width: 150px;
    }
`

const AllIcons: Story<Types.IconProps> = () => {
    return (
        <Wrapper>
            {
                Object.values(Icons).map((name, idx) => {
                    return (
                        <Icon
                            key={`${name}-${idx}`}
                            icon={name}
                        />
                    )
                })
            }
        </Wrapper>
    )
}

const AllIconsStory = AllIcons.bind({})
AllIconsStory.storyName = 'All Icons'

export {
    BasicStory,
    AllIcons
}