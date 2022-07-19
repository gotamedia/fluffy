import { Meta, Story } from '@storybook/react'
import { useCallback } from "react"

import FS from './index'
import { FormData } from "./types"
import * as FSTypes from "./types"

export default {
    title: 'Components/FormSystem',
    component: FS.Form,
    argTypes: {
    },
} as Meta<typeof FS.Form>

const Template: Story<FSTypes.Form> = (props) => {
    const customValidationExample1 = useCallback((formData: FormData) => {
        if (formData.street.value === formData.lastname.value) {
            return [{
                fieldName: "firstname",
                involvedFieldNames: ["lastname", "street"],
                type: FSTypes.Validation.Types.Warning,
                text: "Lastname and street should not be the same!"
            }]
        }

        return []
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
                    i18n={props.i18n}
                    onSubmit={onSubmit}
                    onChange={onChange}
                    disabled={["failed", "progress"].includes(formState.submitStatus)}
                >
                    <FS.Field>
                        <FS.Input.Text name={"email"}>
                            <FS.Validation.Field.Required />
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

                    <FS.Button />
                </FS.Form>
            )}
        </>
    )
}

export const AccountCreation = AccountCreationTemplate.bind({})
AccountCreation.args = {
    i18n: {
        fields: {
            firstname: "Firstname",
            secondname: "Secondname",
            lastname: "Lastname",
            street: "Street",
            default: "Default",
            disabled: "Disabled",
            readOnly: "ReadOnly",
            error: "Error",
            warning: "Warning",
            success: "Success",
            hint: "Hint",
            multiple1: "Multiple (Error/Warning/Success/Hint)",
            multiple2: "Multiple (Disabled/Error/Warning/Success/Hint)",
            multiple3: "Multiple (ReadOnly/Error/Warning/Success/Hint)"
        },
        buttons: {
            submit: "Send"
        }
    }
}
