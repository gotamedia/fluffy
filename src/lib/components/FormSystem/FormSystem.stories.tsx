import { Meta, Story } from '@storybook/react'
import React, { useCallback, useContext, useState } from "react"
import Button from "../Button"
import Message from "../Message/Message"
import { MessageTypes } from "../Message/types"
import * as Contexts from "./contexts"

import FS from './index'
import * as Types from "./types"

interface ChangeProps {
    setFormState: (currentFormState: any) => any
}

const Change: React.FC<ChangeProps> = (props) => {
    const { setFieldValue } = useContext(Contexts.FormContext)

    return (
        <a
            href={"#"}
            onClick={(event) => {
                event.preventDefault()
                props.setFormState((currentFormState: any) => ({
                    ...currentFormState,
                    ssnResolvingStatus: "manual"
                }))
                setFieldValue("firstName", "")
                setFieldValue("lastName", "")
                setFieldValue("street", "")
                setFieldValue("streetNumber", "")
                setFieldValue("staircase", "")
                setFieldValue("apartmentNumber", "")
                setFieldValue("zipCode", "")
                setFieldValue("city", "")
            }}
        >{"Ändra adress"}</a>
    )
}

interface ResetProps {
    setFormState: (currentFormState: any) => any
}

const Reset: React.FC<ResetProps> = (props) => {
    const { setFieldValue } = useContext(Contexts.FormContext)

    return (
        <a
            href={"#"}
            onClick={async (event) => {
                event.preventDefault()

                props.setFormState((currentFormState: any) => ({ ...currentFormState, ssnResolvingStatus: "manual_progress" }))
                await new Promise(resolve => setTimeout(resolve, 3000)) // aka request
                // setFormState((currentFormState) => ({ ...currentFormState, ssnResolvingStatus: "failed" }))
                props.setFormState((currentFormState: any) => ({ ...currentFormState, ssnResolvingStatus: "succeeded" }))
                setFieldValue("firstName", "Johan")
                setFieldValue("lastName", "Johanson")
                setFieldValue("street", "Norra vägen")
                setFieldValue("streetNumber", "17")
                setFieldValue("staircase", "A")
                setFieldValue("apartmentNumber", "1234")
                setFieldValue("zipCode", "39352")
                setFieldValue("city", "Kalmar")
            }}
        >{"Hämta från folkbokföringen"}</a>
    )
}

export default {
    title: 'Components/FormSystem',
    component: FS.Form,
    argTypes: {
    },
} as Meta<typeof FS.Form>

const AccountCreationTemplate: Story<Types.Form> = (props) => {
    const [formState, setFormState] = useState({
        ssnResolvingStatus: "idle",
        zipcodeResolvingStatus: "idle",
        submitStatus: "idle"
    })

    const onCancel = useCallback(async (formData, endCancellationState) => {
        await new Promise(resolve => setTimeout(resolve, 3000)) // aka request
        endCancellationState()
    }, [])

    const onChange = useCallback(async (fieldName, value, isManualChange, formData, setFieldValue) => {
        if (isManualChange) {
            return
        }

        if (fieldName === "ssn") {
            if (new RegExp(/\d{8}-\d{4}/).test(String(value))) {
                setFormState((currentFormState) => ({ ...currentFormState, ssnResolvingStatus: "progress" }))
                await new Promise(resolve => setTimeout(resolve, 1000)) // aka request

                if (value === "12345678-1234") {
                    setFormState((currentFormState) => ({ ...currentFormState, ssnResolvingStatus: "succeeded" }))
                    setFieldValue("firstName", "Johan")
                    setFieldValue("lastName", "Johanson")
                    setFieldValue("street", "Norra vägen")
                    setFieldValue("streetNumber", "17")
                    setFieldValue("staircase", "A")
                    setFieldValue("apartmentNumber", "1234")
                    setFieldValue("zipCode", "39352")
                    setFieldValue("city", "Kalmar")
                } else {
                    setFormState((currentFormState) => ({ ...currentFormState, ssnResolvingStatus: "failed" }))
                }
            } else {
                setFormState((currentFormState) => ({ ...currentFormState, ssnResolvingStatus: "idle" }))
            }
        }

        if (fieldName === "zipCode") {
            if ((value as string).length === 5) {
                setFormState((currentFormState) => ({ ...currentFormState, zipcodeResolvingStatus: "progress" }))
                await new Promise(resolve => setTimeout(resolve, 1000)) // aka request

                if (value === "12345") {
                    setFieldValue("city", "Kalmar")
                    setFormState((currentFormState) => ({ ...currentFormState, zipcodeResolvingStatus: "idle" }))
                } else {
                    setFormState((currentFormState) => ({ ...currentFormState, zipcodeResolvingStatus: "failed" }))
                }
            } else {
                setFieldValue("city", "", false)
                setFormState((currentFormState) => ({ ...currentFormState, zipcodeResolvingStatus: "idle" }))
            }
        }
    }, [])

    const onRetry = useCallback(async (event) => {
        event.preventDefault()
        setFormState((currentFormState) => ({ ...currentFormState, submitStatus: "progress" }))
        await new Promise(resolve => setTimeout(resolve, 3000)) // aka request
        setFormState((currentFormState) => ({ ...currentFormState, submitStatus: "success" }))
    }, [])

    const onRestart = useCallback(() => {
        setFormState({
            ssnResolvingStatus: "idle",
            zipcodeResolvingStatus: "idle",
            submitStatus: "idle"
        })
    }, [])

    const onSubmit = useCallback(async (formData, isValid, validationMessages, endSubmissionState) => {
        console.log("submit", { formData, isValid, validationMessages })

        if (isValid) {
            await new Promise(resolve => setTimeout(resolve, 3000)) // aka request
            setFormState((currentFormState) => ({ ...currentFormState, submitStatus: "failed" }))
        }

        endSubmissionState()
    }, [])

    return (
        <>
            {formState.submitStatus === "success" && (
                <>
                    <p>{"Account successfully created"}</p>
                    <Button onClick={onRestart}>{"Restart"}</Button>
                </>
            )}
            {formState.submitStatus !== "success" && (
                <FS.Form
                    disabled={["failed", "progress"].includes(formState.submitStatus)}
                    i18n={props.i18n}
                    onCancel={onCancel}
                    onChange={onChange}
                    onSubmit={onSubmit}
                >
                    <FS.Field>
                        <FS.Input.Text name={"email"}>
                            <FS.Validation.Field.Required />
                            <FS.Validation.Field.Required />
                            <FS.Validation.Field.Required type={Types.Validation.Types.Warning} />
                            <FS.Validation.Field.Required type={Types.Validation.Types.Hint} />
                            <FS.Validation.Field.Required type={Types.Validation.Types.Success} />
                            <FS.Validation.Field.Required type={Types.Validation.Types.Loading} />
                            <FS.Validation.Field.Email />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Field>
                        <FS.Input.Text name={"password"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Field>
                        <FS.Input.Text name={"ssn"}>
                            <FS.Validation.Field.Required />
                            <FS.Validation.Field.Loading
                                condition={["progress", "manual_progress"].includes(formState.ssnResolvingStatus)}
                                i18n={{ text: "Hämtar adress från folkbokföringen..." }}
                            />
                            {["failed"].includes(formState.ssnResolvingStatus) && (
                                <FS.Validation.Field.Hint
                                    i18n={{ text: "Kunde inte hämta adress. Vänligen fyll i nedan." }}
                                />
                            )}
                        </FS.Input.Text>
                    </FS.Field>
                    {["succeeded", "manual", "manual_progress"].includes(formState.ssnResolvingStatus) && (
                        <span>
                        <strong>{"Adressuppgifter "}</strong>
                            {formState.ssnResolvingStatus === "succeeded" && (<Change setFormState={setFormState} />)}
                            {formState.ssnResolvingStatus === "manual" && (<Reset setFormState={setFormState} />)}
                    </span>
                    )}
                    {["failed", "succeeded", "manual", "manual_progress"].includes(formState.ssnResolvingStatus) && (
                        <>
                            <FS.Field>
                                <FS.Input.Text
                                    name={"firstName"}
                                    disabled={["succeeded", "manual_progress"].includes(formState.ssnResolvingStatus)}
                                >
                                    <FS.Validation.Field.Required />
                                </FS.Input.Text>
                            </FS.Field>
                            <FS.Field>
                                <FS.Input.Text
                                    name={"lastName"}
                                    disabled={["succeeded", "manual_progress"].includes(formState.ssnResolvingStatus)}
                                >
                                    <FS.Validation.Field.Required />
                                </FS.Input.Text>
                            </FS.Field>
                            <FS.Group>
                                <FS.Field>
                                    <FS.Input.Text
                                        name={"street"}
                                        disabled={["succeeded", "manual_progress"].includes(formState.ssnResolvingStatus)}
                                    >
                                        <FS.Validation.Field.Required />
                                    </FS.Input.Text>
                                </FS.Field>
                                <FS.Field>
                                    <FS.Input.Text
                                        name={"streetNumber"}
                                        disabled={["succeeded", "manual_progress"].includes(formState.ssnResolvingStatus)}
                                    />
                                </FS.Field>
                            </FS.Group>
                            <FS.Group>
                                <FS.Field>
                                    <FS.Input.Text
                                        name={"staircase"}
                                        disabled={["succeeded", "manual_progress"].includes(formState.ssnResolvingStatus)}
                                    />
                                </FS.Field>
                                <FS.Field>
                                    <FS.Input.Text
                                        name={"apartmentNumber"}
                                        disabled={["succeeded", "manual_progress"].includes(formState.ssnResolvingStatus)}
                                    />
                                </FS.Field>
                            </FS.Group>
                            <FS.Group>
                                <FS.Field>
                                    <FS.Input.Text
                                        name={"zipCode"}
                                        disabled={["succeeded", "manual_progress"].includes(formState.ssnResolvingStatus)}
                                    >
                                        <FS.Validation.Field.Required />
                                        <FS.Validation.Field.Loading
                                            condition={
                                                ["progress", "manual_progress"].includes(formState.zipcodeResolvingStatus)
                                            }
                                            i18n={{ text: "Hämtar postort..." }}
                                        />
                                        {["failed"].includes(formState.zipcodeResolvingStatus) && (
                                            <FS.Validation.Field.Hint
                                                i18n={{ text: "Kunde inte hitta postnummer. Kontrollera postnummer och försök igen." }}
                                            />
                                        )}
                                    </FS.Input.Text>
                                </FS.Field>
                                <FS.Field>
                                    <FS.Input.Text name={"city"} disabled>
                                        <FS.Validation.Field.Required />
                                    </FS.Input.Text>
                                </FS.Field>
                            </FS.Group>
                        </>
                    )}
                    <FS.Field>
                        <FS.Input.Text name={"mobileNumber"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>

                    {["failed", "progress"].includes(formState.submitStatus) && (
                        <Message
                            type={MessageTypes.Error}
                            text={"Ditt konto skapades, men ett tekniskt problem uppstod. Försök igen om en liten stund."}
                            action={{
                                text: "Försök igen",
                                onClick: onRetry,
                                loading: formState.submitStatus === "progress",
                                disabled: formState.submitStatus === "progress"
                            }}
                        />
                    )}

                    <FS.Button.Cancel />
                    <FS.Button.Submit />
                </FS.Form>
            )}
        </>
    )
}

export const AccountCreation = AccountCreationTemplate.bind({})
AccountCreation.args = {
    i18n: {
        fields: {
            email: "E-postadress",
            password: "Lösenord",
            ssn: "Personnummer (ÅÅÅÅMMDD-XXXX)",
            firstName: "Förnamn",
            lastName: "Efternamn",
            street: "Gatuadress",
            streetNumber: "Gatunummer",
            staircase: "Uppgång",
            apartmentNumber: "Lägenhetsnr",
            zipCode: "Postnummer",
            city: "Postort",
            mobileNumber: "Mobilnummer"
        },
        buttons: {
            cancel: "Tillbaka",
            submit: "Vidare till betalning"
        }
    }
}
