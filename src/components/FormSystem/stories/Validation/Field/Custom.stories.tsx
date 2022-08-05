import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import sprintf from "../../../../../utils/sprintf"
import FS from "../../../index"
import { FormDataValue } from "../../../types"
import * as Types from "../../../types"

const CustomTemplate: Story<Types.Component.Validation.Field.Custom> = (props) => {
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
                    checkbox: "Checkbox label",
                    datepicker: "DatePicker label",
                    number: "Number label",
                    password: "Password label",
                    radiogroup: "RadioGroup label",
                    switch: "Switch label",
                    text: "Text label",
                    textarea: "Textarea label",
                    timepicker: "TimePicker Label"
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
            <FS.Field>
                <FS.Input.Checkbox name={"checkbox"}>
                    <FS.Validation.Field.Custom {...props} />
                </FS.Input.Checkbox>
            </FS.Field>
            <FS.Field>
                <FS.Input.DatePicker name={"datepicker"} dateFormat={"yyyy-MM-dd"}>
                    <FS.Validation.Field.Custom {...props} />
                </FS.Input.DatePicker>
            </FS.Field>
            <FS.Field>
                <FS.Input.Text name={"number"} type={"number"}>
                    <FS.Validation.Field.Custom {...props} />
                </FS.Input.Text>
            </FS.Field>
            <FS.Field>
                <FS.Input.Password name={"password"}>
                    <FS.Validation.Field.Custom {...props} />
                </FS.Input.Password>
            </FS.Field>
            <FS.Field>
                <FS.Input.RadioGroup
                    allowDeselect
                    name={"radiogroup"}
                    options={[
                        { label: "Option 1", value: "1" },
                        { label: "Option 2", value: "2" }
                    ]}
                >
                    <FS.Validation.Field.Custom {...props} />
                </FS.Input.RadioGroup>
            </FS.Field>
            <FS.Field>
                <FS.Input.Switch name={"switch"}>
                    <FS.Validation.Field.Custom {...props} />
                </FS.Input.Switch>
            </FS.Field>
            <FS.Field>
                <FS.Input.Text name={"text"}>
                    <FS.Validation.Field.Custom {...props} />
                </FS.Input.Text>
            </FS.Field>
            <FS.Field>
                <FS.Input.Textarea name={"textarea"}>
                    <FS.Validation.Field.Custom {...props} />
                </FS.Input.Textarea>
            </FS.Field>
            <FS.Field>
                <FS.Input.TimePicker name={"timepicker"} dateFormat={"p"}>
                    <FS.Validation.Field.Custom {...props} />
                </FS.Input.TimePicker>
            </FS.Field>

            <FS.Button.Cancel />
            <FS.Button.Delete />
            <FS.Button.Submit />
        </FS.Form>
    )
}

export const Custom = CustomTemplate.bind({})
Custom.args = {
    validationFunction: (value: FormDataValue, fieldName: string) => {
        return [
            {
                fieldName,
                type: Types.Validation.Types.Error,
                text: sprintf(
                    "Custom validation message. Value: \"${value}\". FieldName: \"${fieldName}\".",
                    { value: String(value), fieldName }
                )
            }
        ]
    }
}

export default {
    title: 'Developments/Components/FormSystem/Validation/Field',
    component: FS.Validation.Field.Custom,
    argTypes: { },
} as Meta<typeof FS.Validation.Field.Custom>
