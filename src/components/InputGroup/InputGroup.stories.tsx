import React, { useState } from 'react'
import styled from 'styled-components'

import Input from '../Input'
import IconButton from '../IconButton'
import Button from '../Button'
import Icon, { Icons } from '../Icon'
import InputGroup from './'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'
import type { ChangeEventHandler } from 'react'

const Basic: Story<Types.InputGroupProps & { value: string }> = (props) => {
    const [inputValue, setInutValue] = useState(props.value)

    const handlOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInutValue(event.target.value)
    }

    return (
        <InputGroup {...props} >
            <Input
                value={inputValue}
                onChange={handlOnChange}
                placeholder={'Type something cool!'}
            />
        </InputGroup>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;

    > div {
        margin-bottom: 15px;
    }
`

const WithIcon: Story<Types.InputGroupProps & { value: string }> = (props) => {
    const [inputValue, setInutValue] = useState(props.value)

    const handlOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInutValue(event.target.value)
    }

    return (
        <Wrapper>
            <InputGroup {...props}>
                <Icon icon={Icons.Bank} />

                <Input
                    value={inputValue}
                    onChange={handlOnChange}
                    placeholder={'Type something cool!'}
                />
            </InputGroup>

            <InputGroup {...props}>
                <Input
                    value={inputValue}
                    onChange={handlOnChange}
                    placeholder={'Type something cool!'}
                />

                <Icon icon={Icons.Edit} />
            </InputGroup>
        </Wrapper>
    )
}

const WithIconButton: Story<Types.InputGroupProps & { value: string }> = (props) => {
    const [inputValue, setInutValue] = useState(props.value)

    const handlOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInutValue(event.target.value)
    }

    return (
        <Wrapper>
            <InputGroup {...props}>
                <IconButton icon={Icons.TrashCan} />

                <Input
                    value={inputValue}
                    onChange={handlOnChange}
                    placeholder={'Type something cool!'}
                />
            </InputGroup>

            <InputGroup {...props}>
                <Input
                    value={inputValue}
                    onChange={handlOnChange}
                    placeholder={'Type something cool!'}
                />

                <IconButton icon={Icons.Search} />
            </InputGroup>
        </Wrapper>
    )
}

WithIconButton.storyName = 'With IconButton'

const WithButton: Story<Types.InputGroupProps & { value: string }> = (props) => {
    const [inputValue, setInutValue] = useState(props.value)

    const handlOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInutValue(event.target.value)
    }

    return (
        <Wrapper>
            <InputGroup {...props}>
                <Button>
                    {'Click me!'}
                </Button>

                <Input
                    value={inputValue}
                    onChange={handlOnChange}
                    placeholder={'Type something cool!'}
                />
            </InputGroup>

            <InputGroup {...props}>
                <Input
                    value={inputValue}
                    onChange={handlOnChange}
                    placeholder={'Type something cool!'}
                />

                <Button>
                    {'Search'}
                </Button>
            </InputGroup>
        </Wrapper>
    )
}

export {
    BasicStory,
    WithIcon,
    WithIconButton,
    WithButton
}

export default {
    title: 'Developments/Components/InputGroup',
    component: InputGroup,
    argTypes: {},
    args: {
        size: 'normal',
        variant: 'primary'
    }
} as Meta<typeof InputGroup>