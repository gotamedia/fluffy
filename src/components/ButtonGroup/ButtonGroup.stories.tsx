import React from 'react'
import styled from 'styled-components'

import ButtonGroup from '.'

import Button from '../Button'
import IconButton from '../IconButton'
import Icon, { Icons } from '../Icon'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;

    button {
        margin-bottom: 15px;
    }
`

const Basic: Story<Types.ButtonGroupProps & {
    text: string
}> = ({text, ...props}) => {
    return (
        <Wrapper>
            <ButtonGroup {...props}>
                <Button>
                    {text}
                </Button>

                <Button>
                    {text}
                </Button>
            </ButtonGroup>

            <ButtonGroup {...props}>
                <Button>
                    {text}
                </Button>

                <Button>
                    <Icon
                        icon={Icons.Eye}
                    />
                </Button>
            </ButtonGroup>

            <ButtonGroup {...props}>
                <Button>
                    <Icon
                        icon={Icons.Bars3}
                    />
                </Button>

                <Button>
                    {text}
                </Button>
            </ButtonGroup>

            <ButtonGroup {...props}>
                <Button>
                    {text}
                </Button>

                <IconButton icon={Icons.Bars3} />

                <Button>
                    {text}
                </Button>
                
                <Button>
                    {text}
                </Button>

                <IconButton icon={Icons.ChevronDown} />
            </ButtonGroup>
        </Wrapper>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Components/ButtonGroup',
    component: ButtonGroup,
    argTypes: {},
    args: {
        variant: 'primary',
        text: 'Click me!',
        size: 'normal',
        disabled: false
    }
} as Meta<typeof ButtonGroup>