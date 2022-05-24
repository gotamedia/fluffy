import React, { useCallback, useEffect } from "react"
import * as Types from "./types"
import * as Styled from "./style"
import * as Hooks from "../../hooks"
import * as Contexts from "../../contexts"

const Form: Types.FormComponent = (props) => {
    const { children, defaultValue, i18n, onChange, onSubmit, value } = props

    const formContextValue = Hooks.useFormContext({ defaultValue, i18n, onChange, value })

    const onSubmitLocal = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log("submit", formContextValue.getFormData()) // TODO delete

        if (onSubmit) {
            onSubmit(formContextValue.getFormData())
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
        <Styled.Form onSubmit={onSubmitLocal}>
            <Contexts.FormContext.Provider value={formContextValue}>
                {children}
            </Contexts.FormContext.Provider>
        </Styled.Form>
    )
}

export default Form
