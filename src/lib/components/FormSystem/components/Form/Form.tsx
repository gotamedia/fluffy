import Group from "@components/FormSystem/components/Group/Group"
import React, { useCallback, useEffect } from "react"
import * as Contexts from "../../contexts"
import * as Hooks from "../../hooks"
import * as FSTypes from "../../types"
import * as Types from "./types"

const Form: Types.FormComponent = (props) => {
    const { children, defaultValue, disabled, i18n, onChange, onSubmit, value } = props

    const formContextValue = Hooks.useFormContext({ defaultValue, disabled, i18n, onChange, value })

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

    useEffect(() => {
        if (value && !onChange) {
            console.error("Warning: You provided a `value` prop to a FS.Form field without an `onChange` handler. This will render a read-only form. If the field should be mutable use `defaultValue`. Otherwise, set `onChange`.")
        }
        if (value && defaultValue) {
            console.error("Warning: A component contains a FS.Form with both value and defaultValue props. FS.Form elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components")
        }
    }, [defaultValue, onChange, value])

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
