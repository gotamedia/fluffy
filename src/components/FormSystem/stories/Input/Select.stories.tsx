import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import type { SelectProps } from "../../components/Input/Select/types"
import FS from "../../index"
import type * as Types from "../../types"

const SelectTemplate: Story<SelectProps> = (props) => {
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
                    submit: "Spara"
                }
            }}
            onChange={onChange}
            onSubmit={onSubmit}
        >
            <FS.Field>
                <FS.Input.Select {...props} />
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const Select = SelectTemplate.bind({})
Select.args = {
    name: "name",
    options: [
        { text: "Option 1", value: "1" },
        { text: "Option 2", value: "2" }
    ]
}

export default {
    title: 'Developments/Components/FormSystem/Input',
    component: FS.Input.Select,
    argTypes: { },
} as Meta<typeof FS.Input.Select>
