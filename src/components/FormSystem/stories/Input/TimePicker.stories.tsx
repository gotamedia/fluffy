import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import type { TimePickerProps } from "../../components/Input/TimePicker/types"
import FS from "../../index"
import type * as Types from "../../types"

const TimePickerTemplate: Story<TimePickerProps> = (props) => {
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
                <FS.Input.TimePicker {...props} />
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const TimePicker = TimePickerTemplate.bind({})
TimePicker.args = {
    dateFormat: "p",
    name: "name"
}

export default {
    title: 'Developments/Components/FormSystem/Input',
    component: FS.Input.TimePicker,
    argTypes: { },
} as Meta<typeof FS.Input.TimePicker>
