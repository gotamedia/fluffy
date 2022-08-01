import { Meta, Story } from "@storybook/react"
import React from "react"
import { DatePickerProps } from "../../components/Input/DatePicker/types"
import FS from "../../index"
import * as Types from "../../types"

const InputDatePickerTemplate: Story<
    Types.Form &
    Omit<DatePickerProps, "onChange" | "onSubmit" | "disabled">
    > = (props) => {
    const {
        defaultValue,
        disabled,
        i18n,
        onCancel,
        onDelete,
        onChange,
        onSubmit,
        value,
        ...inputProps
    } = props

    return (
        <FS.Form
            defaultValue={defaultValue}
            disabled={disabled}
            i18n={i18n}
            onCancel={onCancel}
            onChange={onChange}
            onDelete={onDelete}
            onSubmit={onSubmit}
            value={value}
        >
            <FS.Field>
                <FS.Input.DatePicker
                    {...inputProps}
                    name={"name1"}
                    dateFormat={"yyyy-MM-dd"}
                />
            </FS.Field>
            <FS.Field>
                <FS.Input.DatePicker
                    {...inputProps}
                    name={"name2"}
                    dateFormat={"yyyy-MM-dd HH:mm"}
                    showTimeInput
                    shouldCloseOnSelect={false}
                />
            </FS.Field>
            <FS.Field>
                <FS.Input.DatePicker
                    {...inputProps}
                    selectsRange
                    name={"name3"}
                    dateFormat={"yyyy-MM-dd"}
                />
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const InputDatePicker = InputDatePickerTemplate.bind({})
InputDatePicker.args = {
    disabled: false,
    i18n: {
        fields: {
            name1: "Date",
            name2: "Date with time",
            name3: "Range",
        },
        buttons: {
            cancel: "Tillbaka",
            delete: "Radera",
            submit: "Spara"
        }
    },
    onChange: (...props) => {
        console.log("onChange", props)
    },
    onSubmit: (...props) => {
        console.log("onSubmit", props)
        props[3]()
    }
}

export default {
    title: 'Developments/Components/FormSystem/Input',
    component: FS.Form,
    argTypes: { },
} as Meta<typeof FS.Form>
