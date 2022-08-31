import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import FS from "../../../index"
import type * as Types from "../../../types"

const DateDiffTemplate: Story<Types.Component.Validation.Form.DateDiff> = (props) => {
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
                    date1: "Date1 label",
                    date2: "Date2 label"
                },
                buttons: {
                    cancel: "Tillbaka",
                    delete: "Radera",
                    submit: "Spara"
                }
            }}
            onCancel={onCancel}
            onChange={onChange}
            onSubmit={onSubmit}
        >
            <FS.Validation.Form.DateDiff {...props} />
            <FS.Field>
                <FS.Input.DatePicker name={"date1"} dateFormat={"yyyy-MM-dd"} />
            </FS.Field>
            <FS.Field>
                <FS.Input.DatePicker name={"date2"} dateFormat={"yyyy-MM-dd"} />
            </FS.Field>

            <FS.Button.Cancel />
            <FS.Button.Delete />
            <FS.Button.Submit />
        </FS.Form>
    )
}

export const DateDiff = DateDiffTemplate.bind({})
DateDiff.args = {
    fieldAName: "date1",
    fieldBName: "date2"
}

export default {
    title: 'Developments/Components/FormSystem/Validation/Form',
    component: FS.Validation.Form.DateDiff,
    argTypes: { },
} as Meta<typeof FS.Validation.Form.DateOrder>
