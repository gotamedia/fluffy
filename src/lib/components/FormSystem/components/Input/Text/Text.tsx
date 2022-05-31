import React, { useCallback, useContext, useEffect } from "react"
import * as Types from "./types"
import * as Contexts from "../../../contexts"

const Text: Types.TextComponent = (props) => {
    const { name, children } = props

    const {
        setFieldValue,
        clearValidationMessages,
        addValidationMessages,
        getFieldValue
    } = useContext(Contexts.FormContext)
    const fieldContext = useContext(Contexts.FieldContext)

    useEffect(() => {
        if (name !== fieldContext?.name) {
            fieldContext.setName(name)
        }
    }, [name, fieldContext])

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(name, event?.target?.value)
        clearValidationMessages(name)
    }, [setFieldValue, name, clearValidationMessages])

    const onBlur = useCallback(() => {
        const validationMessages = fieldContext.validate(String(getFieldValue(name) || ""), name)
        addValidationMessages(name, validationMessages)
    }, [addValidationMessages, fieldContext, getFieldValue, name])

    return (
        <>
            <input
                name={name}
                id={name}
                value={String(getFieldValue(name) || "")}
                onChange={onChange}
                onBlur={onBlur}
            />
            {children}
        </>
    )
}

export default Text
