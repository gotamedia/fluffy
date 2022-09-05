import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import type { TextareaProps } from "../../components/Input/Textarea/types"
import FS from "../../index"
import type * as Types from "../../types"

const TextareaTemplate: Story<TextareaProps> = (props) => {
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
                <FS.Input.Textarea {...props} />
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const Textarea = TextareaTemplate.bind({})
Textarea.args = {
    name: "name"
}

export default {
    title: 'Developments/Components/FormSystem/Input',
    component: FS.Input.Textarea,
    argTypes: { },
} as Meta<typeof FS.Input.Textarea>
