import Button from "@components/Button"
import FS from "@components/FormSystem"
import type * as Types from "@components/FormSystem/types"
import Message from "@components/Message"
import { MessageTypes } from "@components/Message/types"
import { Meta, Story } from "@storybook/react"
import React, { useCallback, useState } from "react"
import { Icon, Icons } from "../../../index"
import useFormContext from "../hooks/useFormContext"

interface ChangeProps {
    setFormState: (currentFormState: any) => any
}

const Change: React.FC<ChangeProps> = (props) => {
    const { setFieldValue } = useFormContext()

    return (
        <a
            href={"#"}
            onClick={(event) => {
                event.preventDefault()
                props.setFormState((currentFormState: any) => ({
                    ...currentFormState,
                    ssnResolvingStatus: "manual"
                }))
                setFieldValue("firstName", "", false, true)
                setFieldValue("lastName", "", false, true)
                setFieldValue("street", "", false, true)
                setFieldValue("streetNumber", "", false, true)
                setFieldValue("staircase", "", false, true)
                setFieldValue("apartmentNumber", "", false, true)
                setFieldValue("zipCode", "", false, true)
                setFieldValue("city", "", false, true)
            }}
        >{"Ändra adress"}</a>
    )
}

interface ResetProps {
    setFormState: (currentFormState: any) => any
}

const Reset: React.FC<ResetProps> = (props) => {
    const { setFieldValue } = useFormContext()

    return (
        <a
            href={"#"}
            onClick={async (event) => {
                event.preventDefault()

                props.setFormState((currentFormState: any) => ({ ...currentFormState, ssnResolvingStatus: "manual_progress" }))
                await new Promise(resolve => setTimeout(resolve, 3000)) // aka request
                // setFormState((currentFormState) => ({ ...currentFormState, ssnResolvingStatus: "failed" }))
                props.setFormState((currentFormState: any) => ({ ...currentFormState, ssnResolvingStatus: "succeeded" }))
                setFieldValue("firstName", "Johan", true, true)
                setFieldValue("lastName", "Johanson", true, true)
                setFieldValue("street", "Norra vägen", true, true)
                setFieldValue("streetNumber", "17", true, true)
                setFieldValue("staircase", "A", true, true)
                setFieldValue("apartmentNumber", "1234", true, true)
                setFieldValue("zipCode", "39352", true, true)
                setFieldValue("city", "Kalmar", true, true)
            }}
        >{"Hämta från folkbokföringen"}</a>
    )
}

const AccountCreationTemplate: Story<Types.Form> = (props) => {
    const [formState, setFormState] = useState({
        ssnResolvingStatus: "idle",
        zipcodeResolvingStatus: "idle",
        submitStatus: "idle"
    })

    const onCancel: Types.FormContext.Events.onCancel = useCallback(async (formData, endCancellationState) => {
        await new Promise(resolve => setTimeout(resolve, 3000)) // aka request
        endCancellationState()
    }, [])

    const onChange: Types.FormContext.Events.onChange = useCallback(async (
        fieldName,
        value,
        valid,
        isManualChange,
        formData,
        setFieldValue
    ) => {
        if (isManualChange) {
            return
        }

        if (fieldName === "ssn") {
            if (valid) {
                setFormState((currentFormState) => ({ ...currentFormState, ssnResolvingStatus: "progress" }))
                await new Promise(resolve => setTimeout(resolve, 1000)) // aka request

                if (value === "20000101-1234") {
                    setFormState((currentFormState) => ({ ...currentFormState, ssnResolvingStatus: "succeeded" }))
                    setFieldValue("firstName", "Johan", true)
                    setFieldValue("lastName", "Johanson", true)
                    setFieldValue("street", "Norra vägen", true)
                    setFieldValue("streetNumber", "17", true)
                    setFieldValue("staircase", "A", true)
                    setFieldValue("apartmentNumber", "1234", true)
                    setFieldValue("zipCode", "39352", true)
                    setFieldValue("city", "Kalmar", true)
                } else {
                    setFormState((currentFormState) => ({ ...currentFormState, ssnResolvingStatus: "failed" }))
                }
            } else {
                setFormState((currentFormState) => ({ ...currentFormState, ssnResolvingStatus: "idle" }))
            }
        }

        if (fieldName === "zipCode") {
            if (valid) {
                setFormState((currentFormState) => ({ ...currentFormState, zipcodeResolvingStatus: "progress" }))
                await new Promise(resolve => setTimeout(resolve, 1000)) // aka request

                if (value === "12345") {
                    setFieldValue("city", "Kalmar", true)
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

    const onRetry: (event: React.MouseEvent<HTMLButtonElement>) => void = useCallback(async (event) => {
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

    const onSubmit: Types.FormContext.Events.onSubmit = useCallback(async (
        formData,
        isValid,
        validationMessages,
        endSubmissionState
    ) => {
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
                            <FS.Validation.Field.Email />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Field>
                        <FS.Input.Text name={"password"} type={"password"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Text>
                    </FS.Field>
                    <FS.Field>
                        <FS.Input.Text name={"ssn"}>
                            <FS.Validation.Field.Required />
                            <FS.Validation.Field.SSN />
                            <FS.Validation.Field.Length max={13} />
                            <FS.Validation.Field.Loading
                                condition={["progress", "manual_progress"].includes(formState.ssnResolvingStatus)}
                                i18n={{ text: "Hämtar adress från folkbokföringen..." }}
                            />
                            <FS.Validation.Field.Info
                                condition={["failed"].includes(formState.ssnResolvingStatus)}
                                i18n={{ text: "Kunde inte hämta adress. Vänligen fyll i nedan." }}
                            />
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
                                        <FS.Validation.Field.Length exactly={5} />
                                        <FS.Validation.Field.Loading
                                            condition={
                                                ["progress", "manual_progress"].includes(formState.zipcodeResolvingStatus)
                                            }
                                            i18n={{ text: "Hämtar postort..." }}
                                        />
                                        {["failed"].includes(formState.zipcodeResolvingStatus) && (
                                            <FS.Validation.Field.Info
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
                    <FS.Field>
                        <FS.Input.Switch name={"tos"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Switch>
                    </FS.Field>

                    {["failed", "progress"].includes(formState.submitStatus) && (
                        <Message type={MessageTypes.Error}>
                            <Message.Text>
                                {"Ditt konto skapades, men ett tekniskt problem uppstod. Försök igen om en liten stund."}
                            </Message.Text>

                            <Button
                                onClick={onRetry}
                                disabled={formState.submitStatus === "progress"}
                            >
                                {formState.submitStatus === "progress" && (
                                    <Icon icon={Icons.Spinner} />
                                )}
                                {"Försök igen"}
                            </Button>
                        </Message>
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
            mobileNumber: "Mobilnummer",
            tos: "Jag har tagit del av och godkänner <a href=\"https://kundcenter.gotamedia.se/villkor/\" target=\"_blank\">användarvillkoren</a>"
        },
        buttons: {
            cancel: "Tillbaka",
            submit: "Vidare till betalning"
        }
    }
}

export default {
    title: 'Developments/Components/FormSystem',
    component: FS.Form,
    argTypes: { },
} as Meta<typeof FS.Form>
