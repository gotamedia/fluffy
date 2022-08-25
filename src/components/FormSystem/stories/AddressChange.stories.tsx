import FS from "@components/FormSystem"
import * as Types from "@components/FormSystem/types"
import { Meta, Story } from "@storybook/react"
import React, { useCallback, useState } from "react"

const AddressChangeTemplate: Story<Types.Form> = (props) => {
    const [showEndDate, setShowEndDate] = useState<Boolean>(true)

    const onCancel: Types.FormContext.Events.onCancel = useCallback(async (formData, endCancellationState) => {
        await new Promise(resolve => setTimeout(resolve, 3000)) // aka request
        endCancellationState()
    }, [])

    const onChange: Types.FormContext.Events.onChange = useCallback(async (fieldName, value) => {
        if (fieldName === "typeofmove") {
            setShowEndDate(value === "temp")
        }
    }, [])

    const onSubmit: Types.FormContext.Events.onSubmit = useCallback(async (
        formData,
        isValid,
        validationMessages,
        endSubmissionState
    ) => {
        console.log("submit", { formData, isValid, validationMessages })

        if (isValid) {
            await new Promise(resolve => setTimeout(resolve, 3000)) // aka request
        }

        endSubmissionState()
    }, [])

    return (
        <FS.Form
            i18n={props.i18n}
            onCancel={onCancel}
            onChange={onChange}
            onSubmit={onSubmit}
            defaultValue={{ typeofmove: { name: "typeofmove", value: "temp" }}}
        >
            <h1>{"Adressändring"}</h1>

            <FS.Field>
                <FS.Input.RadioGroup
                    name={"typeofmove"}
                    options={[
                        { label: "Tillfällig adressändring", value: "temp" },
                        { label: "Fast adressändring", value: "perm" }
                    ]}
                >
                    <FS.Validation.Field.Required />
                </FS.Input.RadioGroup>
            </FS.Field>
            <FS.Group>
                <FS.Field>
                    <FS.Input.DatePicker
                        dateFormat={"yyyy-MM-dd"}
                        name={"start"}
                    >
                        <FS.Validation.Field.Required />
                    </FS.Input.DatePicker>
                </FS.Field>
                {showEndDate && (
                    <>
                        <FS.Validation.Form.DateOrder order={["start", "end"]} />
                        <FS.Field>
                            <FS.Input.DatePicker
                                dateFormat={"yyyy-MM-dd"}
                                name={"end"}
                            />
                        </FS.Field>
                    </>
                )}
            </FS.Group>

            <FS.Field>
                <FS.Input.Text name={"co"}>
                    <FS.Validation.Field.Length max={28} />
                </FS.Input.Text>
            </FS.Field>

            <FS.Field>
                <FS.Input.Text name={"street"} maxLength={28}>
                    <FS.Validation.Field.Length max={28} />
                    <FS.Validation.Field.Value value={/^[^0-9]*$/} invertedValue i18n={{ textInverted: "No numbers allowed!"}} />
                </FS.Input.Text>
            </FS.Field>

            <FS.Group>
                <FS.Field>
                    <FS.Input.Text name={"number"} maxLength={5}>
                        <FS.Validation.Field.Length max={5} />
                    </FS.Input.Text>
                </FS.Field>

                <FS.Field>
                    <FS.Input.Text name={"entrance"} maxLength={3}>
                        <FS.Validation.Field.Length max={3} />
                    </FS.Input.Text>
                </FS.Field>

                <FS.Field>
                    <FS.Input.Text name={"apNumber"} maxLength={28}>
                        <FS.Validation.Field.Length max={28} />
                    </FS.Input.Text>
                </FS.Field>
            </FS.Group>

            <FS.Group>
                <FS.Field>
                    <FS.Input.Text name={"postCode"} maxLength={5}>
                        <FS.Validation.Field.Length exactly={5} />
                    </FS.Input.Text>
                </FS.Field>

                <FS.Field>
                    <FS.Input.Text name={"city"} />
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
                        style={{ marginLeft: "4px", cursor: "pointer", textDecoration: "underline" }}
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

export const AddressChange = AddressChangeTemplate.bind({})
AddressChange.args = {
    i18n: {
        fields: {
            start: "Från och med",
            end: "Återdatum",
            co: "C/O-adress",
            street: "Gata",
            number: "Nummer",
            entrance: "Uppgång",
            apNumber: "Lägenhetsnummer",
            postCode: "Postnummer",
            city: "Postort",
            tos: "Jag har läst reglerna",
            tosText: "Jag har läst",
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
