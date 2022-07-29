import { Meta, Story } from '@storybook/react'
import React, { useCallback, useContext, useState } from "react"
import Button from "../Button"
import Message from "../Message/Message"
import { MessageTypes } from "../Message/types"
import { CheckboxProps } from "./components/Input/Checkbox/types"
import { DatePickerProps } from "./components/Input/DatePicker/types"
import { RadioGroupProps } from "./components/Input/RadioGroup/types"
import { SwitchProps } from "./components/Input/Switch/types"
import { TextProps } from "./components/Input/Text/types"
import { TextareaProps } from "./components/Input/Textarea/types"
import { TimePickerProps } from "./components/Input/TimePicker/types"
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

export default {
    title: 'Developments/Components/FormSystem',
    component: FS.Form,
    argTypes: { },
} as Meta<typeof FS.Form>

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
        isManualChange,
        formData,
        setFieldValue
    ) => {
        if (isManualChange) {
            return
        }

        if (fieldName === "ssn") {
            if (new RegExp(/\d{8}-\d{4}/).test(String(value))) {
                setFormState((currentFormState) => ({ ...currentFormState, ssnResolvingStatus: "progress" }))
                await new Promise(resolve => setTimeout(resolve, 1000)) // aka request

                if (value === "12345678-1234") {
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
            if ((value as string).length === 5) {
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
                    <FS.Field>
                        <FS.Input.Switch name={"tos"}>
                            <FS.Validation.Field.Required />
                        </FS.Input.Switch>
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
            mobileNumber: "Mobilnummer",
            tos: "Jag har tagit del av och godkänner <a href=\"https://kundcenter.gotamedia.se/villkor/\" target=\"_blank\">användarvillkoren</a>"
        },
        buttons: {
            cancel: "Tillbaka",
            submit: "Vidare till betalning"
        }
    }
}

/**
 * Checkbox
 */

const InputCheckboxTemplate: Story<
    Types.Form &
    Omit<CheckboxProps, "onChange" | "onSubmit" | "disabled">
> = (props) => {
    const {
        defaultValue,
        disabled,
        i18n,
        onCancel,
        onDelete,
        onChange,
        onSubmit,
        value,
        ...inputProps
    } = props

    return (
        <FS.Form
            defaultValue={defaultValue}
            disabled={disabled}
            i18n={i18n}
            onCancel={onCancel}
            onChange={onChange}
            onDelete={onDelete}
            onSubmit={onSubmit}
            value={value}
        >
            <FS.Field>
                <FS.Input.Checkbox {...inputProps} />
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const InputCheckbox = InputCheckboxTemplate.bind({})
InputCheckbox.args = {
    i18n: {
        fields: {
            name: "Label",
        },
        buttons: {
            cancel: "Tillbaka",
            delete: "Radera",
            submit: "Spara"
        }
    },
    name: "name",
    onChange: (...props) => {
        console.log("onChange", props)
    },
    onSubmit: (...props) => {
        console.log("onSubmit", props)
        props[3]()
    }
}

/**
 * Date Picker
 */

const InputDatePickerTemplate: Story<
    Types.Form &
    Omit<DatePickerProps, "onChange" | "onSubmit" | "disabled">
> = (props) => {
    const {
        defaultValue,
        disabled,
        i18n,
        onCancel,
        onDelete,
        onChange,
        onSubmit,
        value,
        ...inputProps
    } = props

    return (
        <FS.Form
            defaultValue={defaultValue}
            disabled={disabled}
            i18n={i18n}
            onCancel={onCancel}
            onChange={onChange}
            onDelete={onDelete}
            onSubmit={onSubmit}
            value={value}
        >
            <FS.Field>
                <FS.Input.DatePicker
                    {...inputProps}
                    name={"name1"}
                    dateFormat={"yyyy-MM-dd"}
                />
            </FS.Field>
            <FS.Field>
                <FS.Input.DatePicker
                    {...inputProps}
                    name={"name2"}
                    dateFormat={"yyyy-MM-dd HH:mm"}
                    showTimeInput
                    shouldCloseOnSelect={false}
                />
            </FS.Field>
            <FS.Field>
                <FS.Input.DatePicker
                    {...inputProps}
                    selectsRange
                    name={"name3"}
                    dateFormat={"yyyy-MM-dd"}
                />
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const InputDatePicker = InputDatePickerTemplate.bind({})
InputDatePicker.args = {
    disabled: false,
    i18n: {
        fields: {
            name1: "Date",
            name2: "Date with time",
            name3: "Range",
        },
        buttons: {
            cancel: "Tillbaka",
            delete: "Radera",
            submit: "Spara"
        }
    },
    onChange: (...props) => {
        console.log("onChange", props)
    },
    onSubmit: (...props) => {
        console.log("onSubmit", props)
        props[3]()
    }
}

/**
 * Number
 */

const InputNumberTemplate: Story<
    Types.Form &
    Omit<TextProps, "onChange" | "onSubmit" | "disabled">
    > = (props) => {
    const {
        defaultValue,
        disabled,
        i18n,
        onCancel,
        onDelete,
        onChange,
        onSubmit,
        value,
        ...inputProps
    } = props

    return (
        <FS.Form
            defaultValue={defaultValue}
            disabled={disabled}
            i18n={i18n}
            onCancel={onCancel}
            onChange={onChange}
            onDelete={onDelete}
            onSubmit={onSubmit}
            value={value}
        >
            <FS.Field>
                <FS.Input.Text {...inputProps} type={"number"} />
            </FS.Field>

            <FS.Button.Cancel />
            <FS.Button.Delete />
            <FS.Button.Submit />
        </FS.Form>
    )
}

export const InputNumber = InputNumberTemplate.bind({})
InputNumber.args = {
    disabled: false,
    i18n: {
        fields: {
            name: "Label",
        },
        buttons: {
            cancel: "Tillbaka",
            delete: "Radera",
            submit: "Spara"
        }
    },
    name: "name",
    onChange: (...props) => {
        console.log("onChange", props)
    },
    onSubmit: (...props) => {
        console.log("onSubmit", props)
        props[3]()
    }
}

/**
 * Radio Group
 */

const InputRadioGroupTemplate: Story<
    Types.Form &
    Omit<RadioGroupProps, "onChange" | "onSubmit" | "disabled">
> = (props) => {
    const {
        defaultValue,
        disabled,
        i18n,
        onCancel,
        onDelete,
        onChange,
        onSubmit,
        value,
        ...inputProps
    } = props

    return (
        <FS.Form
            defaultValue={defaultValue}
            disabled={disabled}
            i18n={i18n}
            onCancel={onCancel}
            onChange={onChange}
            onDelete={onDelete}
            onSubmit={onSubmit}
            value={value}
        >
            <FS.Field>
                <FS.Input.RadioGroup {...inputProps} />
            </FS.Field>

            <FS.Button.Submit />
        </FS.Form>
    )
}

export const InputRadioGroup = InputRadioGroupTemplate.bind({})
InputRadioGroup.args = {
    allowDeselect: false,
    disabled: false,
    i18n: {
        fields: {
            name: "Label",
        },
        buttons: {
            cancel: "Tillbaka",
            delete: "Radera",
            submit: "Spara"
        }
    },
    name: "name",
    onChange: (...props) => {
        console.log("onChange", props)
    },
    onSubmit: (...props) => {
        console.log("onSubmit", props)
        props[3]()
    },
    options: [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" }
    ]
}

/**
 * Switch
 */

const InputSwitchTemplate: Story<
    Types.Form &
    Omit<SwitchProps, "onChange" | "onSubmit" | "disabled">
> = (props) => {
    const {
        defaultValue,
        disabled,
        i18n,
        onCancel,
        onDelete,
        onChange,
        onSubmit,
        value,
        ...inputProps
    } = props

    return (
        <FS.Form
            defaultValue={defaultValue}
            disabled={disabled}
            i18n={i18n}
            onCancel={onCancel}
            onChange={onChange}
            onDelete={onDelete}
            onSubmit={onSubmit}
            value={value}
        >
            <FS.Field>
                <FS.Input.Switch {...inputProps} />
            </FS.Field>

            <FS.Button.Cancel />
            <FS.Button.Delete />
            <FS.Button.Submit />
        </FS.Form>
    )
}

export const InputSwitch = InputSwitchTemplate.bind({})
InputSwitch.args = {
    disabled: false,
    i18n: {
        fields: {
            name: "Label",
        },
        buttons: {
            cancel: "Tillbaka",
            delete: "Radera",
            submit: "Spara"
        }
    },
    name: "name",
    onChange: (...props) => {
        console.log("onChange", props)
    },
    onSubmit: (...props) => {
        console.log("onSubmit", props)
        props[3]()
    }
}

/**
 * Text
 */

const InputTextTemplate: Story<
    Types.Form &
    Omit<TextProps, "onChange" | "onSubmit" | "disabled">
> = (props) => {
    const {
        defaultValue,
        disabled,
        i18n,
        onCancel,
        onDelete,
        onChange,
        onSubmit,
        value,
        ...inputProps
    } = props

    return (
        <FS.Form
            defaultValue={defaultValue}
            disabled={disabled}
            i18n={i18n}
            onCancel={onCancel}
            onChange={onChange}
            onDelete={onDelete}
            onSubmit={onSubmit}
            value={value}
        >
            <FS.Field>
                <FS.Input.Text {...inputProps} />
            </FS.Field>

            <FS.Button.Cancel />
            <FS.Button.Delete />
            <FS.Button.Submit />
        </FS.Form>
    )
}

export const InputText = InputTextTemplate.bind({})
InputText.args = {
    disabled: false,
    i18n: {
        fields: {
            name: "Label",
        },
        buttons: {
            cancel: "Tillbaka",
            delete: "Radera",
            submit: "Spara"
        }
    },
    name: "name",
    onChange: (...props) => {
        console.log("onChange", props)
    },
    onSubmit: (...props) => {
        console.log("onSubmit", props)
        props[3]()
    }
}

/**
 * Textarea
 */

const InputTextareaTemplate: Story<
    Types.Form &
    Omit<TextareaProps, "onChange" | "onSubmit" | "disabled">
    > = (props) => {
    const {
        defaultValue,
        disabled,
        i18n,
        onCancel,
        onDelete,
        onChange,
        onSubmit,
        value,
        ...inputProps
    } = props

    return (
        <FS.Form
            defaultValue={defaultValue}
            disabled={disabled}
            i18n={i18n}
            onCancel={onCancel}
            onChange={onChange}
            onDelete={onDelete}
            onSubmit={onSubmit}
            value={value}
        >
            <FS.Field>
                <FS.Input.Textarea {...inputProps} />
            </FS.Field>

            <FS.Button.Cancel />
            <FS.Button.Delete />
            <FS.Button.Submit />
        </FS.Form>
    )
}

export const InputTextarea = InputTextareaTemplate.bind({})
InputTextarea.args = {
    disabled: false,
    i18n: {
        fields: {
            name: "Label",
        },
        buttons: {
            cancel: "Tillbaka",
            delete: "Radera",
            submit: "Spara"
        }
    },
    name: "name",
    onChange: (...props) => {
        console.log("onChange", props)
    },
    onSubmit: (...props) => {
        console.log("onSubmit", props)
        props[3]()
    }
}

/**
 * TimePicker
 */

const InputTimePickerTemplate: Story<
    Types.Form &
    Omit<TimePickerProps, "onChange" | "onSubmit" | "disabled">
    > = (props) => {
    const {
        defaultValue,
        disabled,
        i18n,
        onCancel,
        onDelete,
        onChange,
        onSubmit,
        value,
        ...inputProps
    } = props

    return (
        <FS.Form
            defaultValue={defaultValue}
            disabled={disabled}
            i18n={i18n}
            onCancel={onCancel}
            onChange={onChange}
            onDelete={onDelete}
            onSubmit={onSubmit}
            value={value}
        >
            <FS.Field>
                <FS.Input.TimePicker
                    dateFormat={"p"}
                    {...inputProps}
                />
            </FS.Field>

            <FS.Button.Cancel />
            <FS.Button.Delete />
            <FS.Button.Submit />
        </FS.Form>
    )
}

export const InputTimePicker = InputTimePickerTemplate.bind({})
InputTimePicker.args = {
    disabled: false,
    i18n: {
        fields: {
            name: "Label",
        },
        buttons: {
            cancel: "Tillbaka",
            delete: "Radera",
            submit: "Spara"
        }
    },
    name: "name",
    onChange: (...props) => {
        console.log("onChange", props)
    },
    onSubmit: (...props) => {
        console.log("onSubmit", props)
        props[3]()
    }
}
