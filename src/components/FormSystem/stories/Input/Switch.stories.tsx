import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import type { SwitchProps } from "../../components/Input/Switch/types"
import FS from "../../index"
import type * as Types from "../../types"

const SwitchTemplate: Story<SwitchProps> = (props) => {
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
                <FS.Input.Switch {...props} />
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const Switch = SwitchTemplate.bind({})
Switch.args = {
    name: "name"
}

export default {
    title: 'Developments/Components/FormSystem/Input',
    component: FS.Input.Switch,
    argTypes: { },
} as Meta<typeof FS.Input.Switch>
