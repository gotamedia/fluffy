import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import FS from "../../../index"
import type * as Types from "../../../types"

const CustomTemplate: Story<Types.Component.Validation.Form.Custom> = (props) => {
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
                    text1: "Text1 label",
                    text2: "Text2 label",
                    text3: "Text3 label",
                    involvedField: "Involved field label",
                },
                buttons: {
                    cancel: "Tillbaka",
                    delete: "Radera",
                    submit: "Spara"
                }
            }}
            onCancel={onCancel}
            onChange={onChange}
            onSubmit={onSubmit}
        >
            <FS.Group>
                <FS.Validation.Form.Custom {...props} />
                <FS.Field>
                    <FS.Input.Text name={"text1"} />
                </FS.Field>
                <FS.Field>
                    <FS.Input.Text name={"text2"} />
                </FS.Field>
                <FS.Field>
                    <FS.Input.Text name={"text3"} />
                </FS.Field>
            </FS.Group>
            <FS.Field>
                <FS.Input.Text name={"involvedField"} />
            </FS.Field>

            <FS.Button.Cancel />
            <FS.Button.Delete />
            <FS.Button.Submit />
        </FS.Form>
    )
}

export const Custom = CustomTemplate.bind({})
Custom.args = {
    involvedFieldNames: ["text1", "involvedField"],
    validationFunction: () => {
        return [
            {
                fieldName: "text1",
                type: Types.ValidationTypes.Error,
                involvedFieldNames: ["text1", "involvedField"],
                text: "Custom validation message."
            }
        ]
    }
}

export default {
    title: 'Developments/Components/FormSystem/Validation/Form',
    component: FS.Validation.Form.Custom,
    argTypes: { },
} as Meta<typeof FS.Validation.Form.Custom>
