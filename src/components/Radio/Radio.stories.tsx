import React, { useState } from 'react'

import Radio from './index'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'
import type { ChangeEventHandler } from 'react'

const Basic: Story<Types.RadioProps> = (props) => {
    const [checked, setChecked] = useState(props.checked)

    const handlOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setChecked(event.target.checked)
    }

    return (
        <Radio
            {...props}
            checked={checked}
            onChange={handlOnChange}
        />
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

const Group: Story<Types.RadioProps> = (props) => {
    const [value, setValue] = useState('option-1')

    const handlOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value)
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
            }}
            onChange={handlOnChange}
        >
            <Radio
                {...props}
                value={'option-1'}
                checked={value === 'option-1'}
            />

            <Radio
                {...props}
                value={'option-2'}
                checked={value === 'option-2'}
            />

            <Radio
                {...props}
                value={'option-3'}
                checked={value === 'option-3'}
            />
        </div>
    )
}

const GroupStory = Group.bind({})
GroupStory.storyName = 'Radio group'

GroupStory.args = {

}

export {
    BasicStory,
    GroupStory
}

export default {
    title: 'Developments/Components/Radio',
    component: Radio,
    argTypes: {},
    args: {
        checked: true,
        size: 'normal',
        disabled: false,
        label: 'Check me!'
    }
} as Meta<typeof Radio>