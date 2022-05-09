import React, { useState } from 'react'
import styled from 'styled-components'

import Input from '../Input'
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
    align-items: center;

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

                <Icon icon={Icons.AppStore} />
            </InputGroup>
        </Wrapper>
    )
}

export {
    BasicStory,
    WithIcon
}

export default {
    title: 'Components/InputGroup',
    component: InputGroup,
    argTypes: {},
    args: {
        size: 'normal',
        variant: 'primary'
    }
} as Meta<typeof InputGroup>