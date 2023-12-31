import Group from "@components/FormSystem/components/Group/Group"
import React, { forwardRef, useCallback } from "react"
import * as Contexts from "../../contexts"
import * as Hooks from "../../hooks"
import * as FSTypes from "../../types"
import type * as Types from "./types"

const Form: Types.FormComponent = forwardRef((props, ref) => {
    const {
        children,
        defaultValue,
        disabled,
        i18n,
        initialValue,
        onCancel,
        onChange,
        onDelete,
        onSubmit,
        ...formProps
    } = props

    const formContextValue = Hooks.useBuildFormContext({
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
                isValidSoFar && validationMessage.type !== FSTypes.ValidationTypes.Error,
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
        <form
            ref={ref}
            onSubmit={onSubmitLocal}
            {...formProps}
        >
            <Group direction={"vertical"}>
                <Contexts.FormContext.Provider value={formContextValue}>
                    {children}
                </Contexts.FormContext.Provider>
            </Group>
        </form>
    )
})

export default Form
