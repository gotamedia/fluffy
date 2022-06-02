import React, { useCallback, useContext, useEffect } from "react"
import * as Types from "./types"
import * as Contexts from "../../../contexts"
import Input from "@components/Input"

const Text: Types.TextComponent = (props) => {
    const { name, children } = props

    const {
        clearValidationMessages,
        getFieldValue,
        setFieldValue
    } = useContext(Contexts.FormContext)
    const {
        fieldName,
        initialize,
        setFieldName,
        terminate,
        validate
    } = useContext(Contexts.FieldContext)

    useEffect(() => {
        initialize(name, "")

        return () => {
            terminate(name)
        }
    }, [initialize, name, terminate])

    useEffect(() => {
        if (name !== fieldName) {
            setFieldName(name)
        }
    }, [fieldName, name, setFieldName])

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(name, event?.target?.value)
        clearValidationMessages(name)
    }, [setFieldValue, name, clearValidationMessages])

    const onBlur = useCallback(() => {
        clearValidationMessages(name, "all")
        validate()
    }, [clearValidationMessages, name, validate])

    return (
        <>
            <Input
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
