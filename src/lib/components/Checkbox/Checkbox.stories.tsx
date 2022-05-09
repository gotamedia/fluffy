import React, { useState } from 'react'

import Checkbox from './index'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'
import type { ChangeEventHandler } from 'react'

const Basic: Story<Types.CheckboxProps> = (props) => {
    const [CheckboxValue, setInutValue] = useState(props.value)

    const handlOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInutValue(event.target.value)
    }

    return (
        <Checkbox
            {...props}
            value={CheckboxValue}
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
    title: 'Components/Checkbox',
    component: Checkbox,
    argTypes: {},
    args: {
        size: 'normal',
        disabled: false,
        label: 'Check me!'
    }
} as Meta<typeof Checkbox>