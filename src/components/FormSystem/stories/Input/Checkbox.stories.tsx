import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import type { CheckboxProps } from "../../components/Input/Checkbox/types"
import FS from "../../index"
import type * as Types from "../../types"

const CheckboxTemplate: Story<CheckboxProps> = (props) => {
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
                <FS.Input.Checkbox {...props} />
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const Checkbox = CheckboxTemplate.bind({})
Checkbox.args = {
    name: "name"
}

export default {
    title: 'Developments/Components/FormSystem/Input',
    component: FS.Input.Checkbox,
    argTypes: { },
} as Meta<typeof FS.Input.Checkbox>
