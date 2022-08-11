import Group from "@components/FormSystem/components/Group/Group"
import React, { useCallback } from "react"
import * as Contexts from "../../contexts"
import * as Hooks from "../../hooks"
import * as FSTypes from "../../types"
import * as Types from "./types"

const Form: Types.FormComponent = (props) => {
    const {
        children,
        defaultValue,
        disabled,
        i18n,
        initialValue,
        onCancel,
        onChange,
        onDelete,
        onSubmit
    } = props

    const formContextValue = Hooks.useFormContext({
        defaultValue,
        disabled,
        i18n,
        initialValue,
        onCancel,
        onChange,
        onDelete
    })

    const onSubmitLocal = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        formContextValue.setIsSubmitting(true)

        formContextValue.clearAllValidationMessages("all")
        const validationMessages = formContextValue.validateForm(formContextValue.getFormData())
        const isValid = validationMessages.reduce(
            (isValidSoFar, validationMessage) =>
                isValidSoFar && validationMessage.type !== FSTypes.Validation.Types.Error,
            true
        )

        if (onSubmit) {
            onSubmit(
                formContextValue.getFormData(),
                isValid,
                validationMessages,
                () => {
                    formContextValue.setIsSubmitting(false)
                }
            )
        }
    }, [formContextValue, onSubmit])

    return (
        <form onSubmit={onSubmitLocal}>
            <Group $direction={"vertical"}>
                <Contexts.FormContext.Provider value={formContextValue}>
                    {children}
                </Contexts.FormContext.Provider>
            </Group>
        </form>
    )
}

export default Form
