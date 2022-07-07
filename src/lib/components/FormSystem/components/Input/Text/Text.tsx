import useTheme from "@hooks/useTheme"
import React, { useCallback, useContext, useEffect } from "react"
import * as Types from "./types"
import * as Styled from "./style"
import * as Contexts from "../../../contexts"

const Text: Types.TextComponent = (props) => {
    const { children, disabled, name, readOnly } = props

    const theme = useTheme()

    const {
        clearValidationMessages,
        getFieldValue,
        getHighestValidationMessageType,
        setFieldValue
    } = useContext(Contexts.FormContext)
    const {
        fieldName,
        initialize,
        setFieldName,
        terminate,
        validate
    } = useContext(Contexts.FieldContext)

    // separate initialize and terminate to avoid unwanted additional executions
    useEffect(() => {
        initialize(name, "")
    }, [initialize, name])

    useEffect(() => {
        return () => {
            terminate(name)
        }
    }, [terminate, name])

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
            <Styled.Text
                $theme={theme}
                disabled={disabled}
                id={name}
                name={name}
                readOnly={readOnly}
                validationType={getHighestValidationMessageType(name)}
                value={String(getFieldValue(name) || "")}
                onChange={onChange}
                onBlur={onBlur}
            />
            {children}
        </>
    )
}

export default Text
