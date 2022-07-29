import React, { useState } from 'react'

import Textarea from './index'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'
import type { ChangeEventHandler } from 'react'

const Basic: Story<Types.TextareaProps> = (props) => {
    const [TextareaValue, setInutValue] = useState(props.value)

    const handlOnChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        setInutValue(event.target.value)
    }

    return (
        <Textarea
            {...props}
            value={TextareaValue}
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
    title: 'Developments/Components/Textarea',
    component: Textarea,
    argTypes: {},
    args: {
        variant: 'primary',
        value: '',
        size: 'normal',
        disabled: false,
        placeholder: 'Type something cool!'
    }
} as Meta<typeof Textarea>