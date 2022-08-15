import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import FS from "../../../index"
import * as Types from "../../../types"

const DateOrderTemplate: Story<Types.Component.Validation.Form.DateOrder> = (props) => {
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
                    date2: "Date2 label",
                    date3: "Date3 label",
                    date4: "Date4 label"
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
            <FS.Validation.Form.DateOrder {...props} />
            <FS.Validation.Form.DateOrder order={["date1", "date2", "date3"]} ignoreEqualDates />
            <FS.Field>
                <FS.Input.DatePicker name={"date1"} dateFormat={"yyyy-MM-dd"} />
            </FS.Field>
            <FS.Field>
                <FS.Input.DatePicker name={"date2"} dateFormat={"yyyy-MM-dd"} />
            </FS.Field>
            <FS.Field>
                <FS.Input.DatePicker name={"date3"} dateFormat={"yyyy-MM-dd"} />
            </FS.Field>
            <FS.Field>
                <FS.Input.DatePicker name={"date4"} dateFormat={"yyyy-MM-dd"} />
            </FS.Field>

            <FS.Button.Cancel />
            <FS.Button.Delete />
            <FS.Button.Submit />
        </FS.Form>
    )
}

export const DateOrder = DateOrderTemplate.bind({})
DateOrder.args = {}

export default {
    title: 'Developments/Components/FormSystem/Validation/Form',
    component: FS.Validation.Form.DateOrder,
    argTypes: { },
} as Meta<typeof FS.Validation.Form.DateOrder>
