import { Meta, Story } from "@storybook/react"
import React from "react"
import { TextProps } from "../../components/Input/Text/types"
import FS from "../../index"
import * as Types from "../../types"

const InputNumberTemplate: Story<
    Types.Form &
    Omit<TextProps, "onChange" | "onSubmit" | "disabled">
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
                <FS.Input.Text {...inputProps} type={"number"} />
            </FS.Field>

            <FS.Button.Cancel />
            <FS.Button.Delete />
            <FS.Button.Submit />
        </FS.Form>
    )
}

export const InputNumber = InputNumberTemplate.bind({})
InputNumber.args = {
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
    }
}

export default {
    title: 'Developments/Components/FormSystem/Input',
    component: FS.Form,
    argTypes: { },
} as Meta<typeof FS.Form>
