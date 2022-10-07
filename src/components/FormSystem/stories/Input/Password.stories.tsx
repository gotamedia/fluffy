import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import type { PasswordProps } from "../../components/Input/Password/types"
import FS from "../../index"
import type * as Types from "../../types"

const PasswordTemplate: Story<PasswordProps> = (props) => {
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
                <FS.Input.Password {...props} />
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const Password = PasswordTemplate.bind({})
Password.args = {
    name: "name"
}

export default {
    title: 'Developments/Components/FormSystem/Input',
    component: FS.Input.Password,
    argTypes: { },
} as Meta<typeof FS.Input.Password>
