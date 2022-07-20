import React, { useState } from "react"

import Switch from "./index"

import type * as Types from "./types"
import type { Story, Meta } from "@storybook/react"
import type { ChangeEventHandler } from "react"

const Basic: Story<Types.SwitchProps> = (props) => {
    const [SwitchValue, setInputValue] = useState(props.value)

    const handleOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <Switch
            {...props}
            value={SwitchValue}
            onChange={handleOnChange}
        />
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = "Basic"

export {
    BasicStory
}

export default {
    title: "Components/Switch",
    component: Switch,
    argTypes: {},
    args: {
        disabled: false,
        invalid: false,
        label: "Check me!",
        size: "normal"
    }
} as Meta<typeof Switch>
