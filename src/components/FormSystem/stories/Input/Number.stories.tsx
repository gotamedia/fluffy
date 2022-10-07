import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import type { TextProps } from "../../components/Input/Text/types"
import FS from "../../index"
import type * as Types from "../../types"

const NumberTemplate: Story<TextProps> = (props) => {
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
                <FS.Input.Text {...props} type={"number"} />
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const Number = NumberTemplate.bind({})
Number.args = {
    name: "name"
}

export default {
    title: 'Developments/Components/FormSystem/Input',
    component: FS.Input.Text,
    argTypes: { },
} as Meta<typeof FS.Input.Text>
