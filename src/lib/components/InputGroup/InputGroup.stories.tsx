import React, { useState } from 'react'

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
            <Icon icon={'Eye'}/>
            <Input
                value={inputValue}
                onChange={handlOnChange}
            />
            <Icon icon={Icons.Eye}/>
        </InputGroup>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Components/InputGroup',
    component: InputGroup,
    argTypes: {},
    args: {
        size: 'normal',
        variant: 'primary',
        value: 'Type something cool!'
    }
} as Meta<typeof InputGroup>