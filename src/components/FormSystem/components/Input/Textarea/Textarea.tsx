import React, { useCallback } from "react"

import { useInputLogic } from "@components/FormSystem/hooks"
import PlainTextarea from "@components/Textarea"
import * as Types from "./types"

const Textarea: Types.TextareaComponent = (props) => {
    const { children, disabled, filter, name, onBlur: propsOnBlur, onChange: propsOnChange, ...textareaProps } = props

    const {
        additionalInputProps,
        clearValidationMessages,
        disabled: disabledCombined,
        onBlur: inputLogicOnBlur,
        setFieldValue,
        validateOnChange,
        value
    } = useInputLogic({ defaultValue: "", disabled, name })

    const onBlur = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
        inputLogicOnBlur()

        if (propsOnBlur) {
            propsOnBlur(event)
        }
    }, [propsOnBlur, inputLogicOnBlur])

    const onChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        let newValue = event?.target?.value

        if (filter) {
            newValue = String(event?.target?.value).replace(filter, "")
        }

        if (additionalInputProps.filter) {
            newValue = String(event?.target?.value).replace(additionalInputProps.filter, "")
        }

        setFieldValue(name, newValue)
        clearValidationMessages(name)
        validateOnChange(name, newValue)

        if (propsOnChange) {
            propsOnChange(event)
        }
    }, [
        filter,
        additionalInputProps.filter,
        setFieldValue,
        name,
        clearValidationMessages,
        validateOnChange,
        propsOnChange
    ])

    return (
        <>
            <PlainTextarea
                maxLength={additionalInputProps?.maxLength}
                disabled={disabledCombined}
                id={name}
                name={name}
                value={String(value)}
                onChange={onChange}
                onBlur={onBlur}
                {...textareaProps}
            />
            {children}
        </>
    )
}

export default Textarea
