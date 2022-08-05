import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import { DatePickerProps } from "../../components/Input/DatePicker/types"
import FS from "../../index"
import * as Types from "../../types"

const DatePickerTemplate: Story<DatePickerProps> = (props) => {
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
                    name1: "Date",
                    name2: "Date with time",
                    name3: "Range",
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
                <FS.Input.DatePicker
                    dateFormat={"yyyy-MM-dd"}
                    {...props}
                    name={"name1"}
                />
            </FS.Field>
            <FS.Field>
                <FS.Input.DatePicker
                    dateFormat={"yyyy-MM-dd HH:mm"}
                    showTimeInput
                    shouldCloseOnSelect={false}
                    {...props}
                    name={"name2"}
                />
            </FS.Field>
            <FS.Field>
                <FS.Input.DatePicker
                    selectsRange
                    dateFormat={"yyyy-MM-dd"}
                    {...props}
                    name={"name3"}
                />
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const DatePicker = DatePickerTemplate.bind({})
DatePicker.args = {}

export default {
    title: 'Developments/Components/FormSystem/Input',
    component: FS.Input.DatePicker,
    argTypes: { },
} as Meta<typeof FS.Input.DatePicker>
