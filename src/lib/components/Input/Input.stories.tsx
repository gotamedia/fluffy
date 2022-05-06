import React, { useState } from 'react'

import Input from './index'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'
import type { ChangeEventHandler } from 'react'

const Basic: Story<Types.InputProps> = (props) => {
    const [inputValue, setInutValue] = useState(props.value)

    const handlOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInutValue(event.target.value)
    }

    return (
        <Input
            {...props}
            value={inputValue}
            onChange={handlOnChange}
        />
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {},
    args: {
        variant: 'primary',
        value: 'Click me!',
        size: 'normal',
        disabled: false
    }
} as Meta<typeof Input>