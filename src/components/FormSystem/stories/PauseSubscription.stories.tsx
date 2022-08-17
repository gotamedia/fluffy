import FS from "@components/FormSystem"
import * as Types from "@components/FormSystem/types"
import { Meta, Story } from "@storybook/react"
import { isBefore } from "date-fns"
import React, { useCallback } from "react"

const PauseSubscriptionTemplate: Story<Types.Form> = (props) => {
    const onCancel: Types.FormContext.Events.onCancel = useCallback(async (formData, endCancellationState) => {
        await new Promise(resolve => setTimeout(resolve, 3000)) // aka request
        endCancellationState()
    }, [])

    const onChange: Types.FormContext.Events.onChange = useCallback((
        fieldName,
        value,
        valid,
        inManualChange,
        formData,
        setFieldValue
    ) => {
        if (fieldName === "start") {
            if (formData.end.value && value) {
                const startDate = new Date(String(value))
                const endDate = new Date(String(formData.end.value))

                if (!isBefore(startDate, endDate)) {
                    setFieldValue("end", "", false)
                }
            }
        }
    }, [])

    const onSubmit: Types.FormContext.Events.onSubmit = useCallback(async (
        formData,
        isValid,
        validationMessages,
        endSubmissionState
    ) => {
        console.log("submit", { formData, isValid, validationMessages })
        endSubmissionState()
    }, [])

    return (
        <FS.Form
            i18n={props.i18n}
            onCancel={onCancel}
            onSubmit={onSubmit}
            onChange={onChange}
            defaultValue={{ typeofmove: { name: "typeofmove", value: "temp" }}}
        >
            <h1>{"Adressändring"}</h1>

            <FS.Field>
                <FS.Input.RadioGroup
                    name={"pausedproduct"}
                    options={[
                        { label: "Papperstidning", value: "paper" },
                        { label: "Papper och digitalt", value: "paperDigital" }
                    ]}
                >
                    <FS.Validation.Field.Required />
                </FS.Input.RadioGroup>
            </FS.Field>
            <FS.Group>
                <FS.Validation.Form.DateRange fieldName={"end"} minFieldName={"start"} minExclusive />
                <FS.Field>
                    <FS.Input.DatePicker
                        dateFormat={"yyyy-MM-dd"}
                        name={"start"}
                    >
                        <FS.Validation.Field.Required />
                    </FS.Input.DatePicker>
                </FS.Field>
                <FS.Field>
                    <FS.Input.DatePicker
                        dateFormat={"yyyy-MM-dd"}
                        name={"end"}
                    >
                        <FS.Validation.Field.Required />
                    </FS.Input.DatePicker>
                </FS.Field>
            </FS.Group>

            <FS.Field>
                <FS.Field.Label>
                    {props.i18n?.fields?.tosText}
                    <span
                        onClick={(event) => {
                            event.preventDefault()
                            alert("Show tos")
                        }}
                        style={{ cursor: "pointer", textDecoration: "underline" }}
                    >{props.i18n?.fields?.tosButton}</span>
                </FS.Field.Label>
                <FS.Input.Switch name={"tos"}>
                    <FS.Validation.Field.Required />
                </FS.Input.Switch>
            </FS.Field>

            <FS.Button.Cancel />
            <FS.Button.Submit />
        </FS.Form>
    )
}

export const PauseSubscription = PauseSubscriptionTemplate.bind({})
PauseSubscription.args = {
    i18n: {
        fields: {
            pausedproduct: "Typ av uppehåll",
            start: "Från och med",
            end: "Återdatum",
            tos: "Jag har läst reglerna",
            tosText: "Jag har läst ",
            tosButton: "reglerna"
        },
        buttons: {
            cancel: "Avbryt",
            submit: "Spara"
        }
    }
}

export default {
    title: 'Developments/Components/FormSystem',
    component: FS.Form,
    argTypes: { },
} as Meta<typeof FS.Form>
