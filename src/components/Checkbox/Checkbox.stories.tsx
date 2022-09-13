import { useState } from 'react'

import Checkbox from './'
import { Checkbox as Component } from './Checkbox'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'
import type { ChangeEventHandler } from 'react'

const Basic: Story<Types.CheckboxProps> = (props) => {
    const [checked, setChecked] = useState(props.checked)

    const handlOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setChecked(event.target.checked)
    }

    return (
        <Checkbox
            {...props}
            checked={checked}
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
    title: 'Developments/Components/Checkbox',
    component: Component,
    argTypes: {},
    args: {
        checked: true,
        disabled: false,
        label: 'Check me!'
    }
} as Meta<Types.CheckboxComponent>