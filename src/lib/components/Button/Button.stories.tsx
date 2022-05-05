import React from 'react'
import styled from 'styled-components'

import Button from './index'
import Icon, { Icons } from '../Icon'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Basic: Story<Types.ButtonComponent & {
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

const WithIcon: Story<Types.ButtonComponent & {
    text: string
}> = ({text, ...props}) => {
    return (
        <Wrapper>
            <Button {...props}>
                <Icon icon={Icons.Eye} />
                {text}
            </Button>

            <Button {...props}>
                {text}
                <Icon icon={Icons.Eye} />
            </Button>
        </Wrapper>
    )
}

const WithIconStory = WithIcon.bind({})
WithIconStory.storyName = 'WithIcon'

export {
    BasicStory,
    WithIcon
}

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {},
    args: {
        variant: 'primary',
        text: 'Click me!',
        disabled: false
    }
} as Meta<typeof Button>