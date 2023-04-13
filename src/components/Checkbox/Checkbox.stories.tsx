import { useState } from 'react'

import Checkbox, {
    CheckboxSizes,
    CheckboxVariants,
    CheckboxVariantTypes
} from './index'

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
    title: 'Components/Checkbox',
    component: Checkbox,
    argTypes: {},
    args: {
        label: 'Check me!',
        checked: true,
        disabled: false,
        indeterminate: false,
        size: CheckboxSizes.Normal,
        variant: CheckboxVariants.Primary,
        variantType: CheckboxVariantTypes.Default
    }
} as Meta<typeof Checkbox>