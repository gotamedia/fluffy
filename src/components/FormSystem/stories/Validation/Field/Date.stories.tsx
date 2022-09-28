import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import FS from "../../../index"
import type * as Types from "../../../types"

const DateTemplate: Story<Types.Component.Validation.Field.Date> = (props) => {
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
                    select: "Select label",
                    switch: "Switch label",
                    text: "Text label",
                    textarea: "Textarea label",
                    timepicker: "TimePicker Label"
                },
                buttons: {
                    submit: "Spara"
                }
            }}
            onChange={onChange}
            onSubmit={onSubmit}
        >
            <FS.Field>
                <FS.Input.Checkbox name={"checkbox"}>
                    <FS.Validation.Field.Date {...props} />
                </FS.Input.Checkbox>
            </FS.Field>
            <FS.Field>
                <FS.Input.DatePicker name={"datepicker"} dateFormat={"yyyy-MM-dd"}>
                    <FS.Validation.Field.Date {...props} />
                </FS.Input.DatePicker>
            </FS.Field>
            <FS.Field>
                <FS.Input.Text name={"number"} type={"number"}>
                    <FS.Validation.Field.Date {...props} />
                </FS.Input.Text>
            </FS.Field>
            <FS.Field>
                <FS.Input.Password name={"password"}>
                    <FS.Validation.Field.Date {...props} />
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
                    <FS.Validation.Field.Date {...props} />
                </FS.Input.RadioGroup>
            </FS.Field>
            <FS.Field>
                <FS.Input.Select
                    name={"select"}
                    options={[
                        { text: "Option 1", value: "1" },
                        { text: "Option 2", value: "2" }
                    ]}
                >
                    <FS.Validation.Field.Date {...props} />
                </FS.Input.Select>
            </FS.Field>
            <FS.Field>
                <FS.Input.Switch name={"switch"}>
                    <FS.Validation.Field.Date {...props} />
                </FS.Input.Switch>
            </FS.Field>
            <FS.Field>
                <FS.Input.Text name={"text"}>
                    <FS.Validation.Field.Date {...props} />
                </FS.Input.Text>
            </FS.Field>
            <FS.Field>
                <FS.Input.Textarea name={"textarea"}>
                    <FS.Validation.Field.Date {...props} />
                </FS.Input.Textarea>
            </FS.Field>
            <FS.Field>
                <FS.Input.TimePicker name={"timepicker"} dateFormat={"p"}>
                    <FS.Validation.Field.Date {...props} />
                </FS.Input.TimePicker>
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const Date_ = DateTemplate.bind({})
Date_.args = {
    max: new Date("2022-08-20 00:00:00"),
    maxExclusive: false,
    min: new Date("2022-08-10 00:00:00"),
    minExclusive: false
}

export default {
    title: 'Developments/Components/FormSystem/Validation/Field',
    component: FS.Validation.Field.Date,
    argTypes: { },
} as Meta<typeof FS.Validation.Field.Date>
