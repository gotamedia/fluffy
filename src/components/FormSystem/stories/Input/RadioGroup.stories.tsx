import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import type { RadioGroupProps } from "../../components/Input/RadioGroup/types"
import FS from "../../index"
import type * as Types from "../../types"

const RadioGroupTemplate: Story<RadioGroupProps> = (props) => {
    const onCancel: Types.FormContext.Events.onCancel = useCallback((...props) => {
        console.log("onCancel", props)
    }, [])

    const onChange: Types.FormContext.Events.onChange = useCallback((...props) => {
        console.log("onChange", props)
    }, [])

    const onSubmit: Types.FormContext.Events.onSubmit = useCallback((...props) => {
        console.log("onSubmit", props)
        props[3]()
    }, [])

    return (
        <FS.Form
            i18n={{
                fields: {
                    name: "Label",
                },
                buttons: {
                    cancel: "Tillbaka",
                    submit: "Spara"
                }
            }}
            onCancel={onCancel}
            onChange={onChange}
            onSubmit={onSubmit}
        >
            <FS.Field>
                <FS.Input.RadioGroup {...props} />
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const RadioGroup = RadioGroupTemplate.bind({})
RadioGroup.args = {
    name: "name",
    options: [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" }
    ]
}

export default {
    title: 'Developments/Components/FormSystem/Input',
    component: FS.Input.RadioGroup,
    argTypes: { },
} as Meta<typeof FS.Input.RadioGroup>
