import styled from 'styled-components'

import ButtonGroup from './'
import { ButtonGroup as Component } from './ButtonGroup'

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
                        icon={Icons.Menu}
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

                <IconButton icon={Icons.Menu} />

                <Button>
                    {text}
                </Button>
                
                <Button>
                    {text}
                </Button>

                <IconButton icon={Icons.ArrowDown} />
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
    component: Component,
    argTypes: {},
    args: {
        variant: 'primary',
        text: 'Click me!',
        size: 'normal',
        disabled: false
    }
} as Meta<Types.ButtonGroupComponent>