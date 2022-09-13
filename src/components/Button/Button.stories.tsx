import styled from 'styled-components'

import Button from './'
import { Button as Component } from './Button'

import Icon, { Icons, IconType } from '../Icon'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Basic: Story<Types.ButtonProps & {
    text: string
}> = ({text, ...props}) => {
    return (
        <Button {...props}>
            {text}
        </Button>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    button {
        margin-bottom: 15px;
    }
`

const WithIcon: Story<Types.ButtonProps & {
    text: string,
    icon: IconType,
}> = ({text, icon, ...props}) => {
    return (
        <Wrapper>
            <Button {...props}>
                <Icon icon={icon} />
                {text}
            </Button>

            <Button {...props}>
                {text}
                <Icon icon={icon} />
            </Button>
        </Wrapper>
    )
}

WithIcon.args = {
    icon: Icons.Eye,
}

const WithIconStory = WithIcon.bind({})
WithIconStory.storyName = 'WithIcon'

export {
    BasicStory,
    WithIcon
}

export default {
    title: 'Components/Button',
    component: Component,
    argTypes: {},
    args: {
        text: 'Click me!',
        disabled: false
    }
} as Meta<Types.ButtonComponent>