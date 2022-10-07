import { Meta, Story } from "@storybook/react"
import React, { useCallback } from "react"
import FS from "../../../index"
import type * as Types from "../../../types"

const DateRangeTemplate: Story<Types.Component.Validation.Form.DateRange> = (props) => {
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
                    minDate: "Min date label",
                    compareDate: "Compare date label",
                    maxDate: "Max date label"
                },
                buttons: {
                    submit: "Spara"
                }
            }}
            onChange={onChange}
            onSubmit={onSubmit}
        >
            <FS.Validation.Form.DateRange {...props} />
            <FS.Field>
                <FS.Input.DatePicker name={"minDate"} dateFormat={"yyyy-MM-dd"} />
            </FS.Field>
            <FS.Field>
                <FS.Input.DatePicker name={"compareDate"} dateFormat={"yyyy-MM-dd"} />
            </FS.Field>
            <FS.Field>
                <FS.Input.DatePicker name={"maxDate"} dateFormat={"yyyy-MM-dd"} />
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const DateRange = DateRangeTemplate.bind({})
DateRange.args = {
    fieldName: "compareDate",
    minFieldName: "minDate",
    maxFieldName: "maxDate"
}

export default {
    title: 'Developments/Components/FormSystem/Validation/Form',
    component: FS.Validation.Form.DateRange,
    argTypes: { },
} as Meta<typeof FS.Validation.Form.DateRange>
