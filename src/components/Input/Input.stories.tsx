import { useState } from 'react'

import Input from './'
import { Input as Component} from './Input'

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
    title: 'Developments/Components/Input',
    component: Component,
    argTypes: {},
    args: {
        variant: 'primary',
        value: '',
        size: 'normal',
        disabled: false,
        placeholder: 'Type something cool!'
    }
} as Meta<Types.InputComponent>