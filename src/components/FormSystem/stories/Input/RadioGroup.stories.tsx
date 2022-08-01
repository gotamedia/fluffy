import { Meta, Story } from "@storybook/react"
import React from "react"
import { RadioGroupProps } from "../../components/Input/RadioGroup/types"
import FS from "../../index"
import * as Types from "../../types"

const InputRadioGroupTemplate: Story<
    Types.Form &
    Omit<RadioGroupProps, "onChange" | "onSubmit" | "disabled">
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
                <FS.Input.RadioGroup {...inputProps} />
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const InputRadioGroup = InputRadioGroupTemplate.bind({})
InputRadioGroup.args = {
    allowDeselect: false,
    disabled: false,
    i18n: {
        fields: {
            name: "Label",
        },
        buttons: {
            cancel: "Tillbaka",
            delete: "Radera",
            submit: "Spara"
        }
    },
    name: "name",
    onChange: (...props) => {
        console.log("onChange", props)
    },
    onSubmit: (...props) => {
        console.log("onSubmit", props)
        props[3]()
    },
    options: [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" }
    ]
}

export default {
    title: 'Developments/Components/FormSystem/Input',
    component: FS.Form,
    argTypes: { },
} as Meta<typeof FS.Form>
