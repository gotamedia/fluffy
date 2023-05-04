import { useState } from 'react'

import Input, {
    InputVariants,
    InputVariantTypes,
    InputSizes,
    InputStates
} from './index'

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
        variant: InputVariants.Primary,
        variantType: InputVariantTypes.Default,
        size: InputSizes.Normal,
        state: InputStates.Default,
        label: '',
        value: '',
        placeholder: 'Placeholder',
        disabled: false
    }
} as Meta<typeof Input>