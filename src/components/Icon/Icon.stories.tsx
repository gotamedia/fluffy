import styled from 'styled-components'

import { Icon } from './Icon'

import {
    Icons,
    IconSizes
} from './'

import * as Types from './types'
import type { Story, Meta } from '@storybook/react'

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
    column-gap: 20px;
    row-gap: 20px;

    span {
        padding: 25px;
    }
`

const IconWrapper = styled.div`
    border: 1px solid #bdbdbd;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    width: 300px;

    svg {
        margin: auto;
    }
`

const IconName = styled.p`
    margin: auto;
    padding: 15px 40px;
    border-top: 1px solid #e7e7e7;
`

const AllIcons: Story<Types.IconProps> = () => {
    return (
        <Wrapper>
            {
                Object.values(Icons).map((name, idx) => {
                    return (
                        <IconWrapper key={`${name}-${idx}`}>
                            <Icon icon={name} />

                            <IconName>
                                {name}
                            </IconName>
                        </IconWrapper>
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

export default {
    title: 'Components/Icon',
    component: Icon,
    argTypes: {},
    args: {
        icon: Icons.Bank,
        size: IconSizes.Normal
    }
} as Meta<typeof Icon>