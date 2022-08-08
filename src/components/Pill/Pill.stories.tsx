import React from 'react'
import styled from 'styled-components'

import Pill from './'
// import Icon, { Icons } from '../Icon'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'


const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;

    button {
        margin-bottom: 15px;
    }
`

const Basic: Story<Types.PillProps & {
    text: string
}> = ({ text, ...props }) => {
    return (
        <Wrapper>
            <Pill {...props}>
                {text}
            </Pill>
        </Wrapper>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Components/Pill',
    component: Pill,
    argTypes: {},
    args: {
        variant: 'alert',
        text: 'Click me!'
    }
} as Meta<typeof Pill>