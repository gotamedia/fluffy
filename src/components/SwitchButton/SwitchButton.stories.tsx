import { useState } from 'react'

import SwitchButton from './index'
import { SwitchButton as Component } from './SwitchButton'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'
import type { ChangeEventHandler } from 'react'

const Basic: Story<Types.SwitchButtonProps> = (props) => {
    const [checked, setChecked] = useState(props.checked)

    const handlOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setChecked(event.target.checked)
    }

    return (
        <SwitchButton
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
    title: 'Developments/Components/SwitchButton',
    component: Component,
    argTypes: {},
    args: {
        checked: true,
        size: 'normal',
        disabled: false,
        label: 'Check me!'
    }
} as Meta<Types.SwitchButtonComponent>