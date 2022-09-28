import { Meta, Story } from "@storybook/react"
import React from "react"
import Hint from "./Hint"
import { HintProps, HintTypes } from "./types"

const BasicTemplate: Story<HintProps> = (props) => {
    return (
        <Hint {...props} />
    )
}

export const Basic = BasicTemplate.bind({})
Basic.args = {
    text: "This is an error message",
    type: HintTypes.Error
}

export default {
    title: 'Developments/Components/Hint',
    component: Hint,
    argTypes: { },
} as Meta<typeof Hint>
