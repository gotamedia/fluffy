import { useInputLogic } from "@components/FormSystem/hooks"
import Input from "@components/Input"
import React, { useCallback } from "react"
import type * as Types from "./types"

const Text: Types.TextComponent = (props) => {
    const { children, disabled, filter, name, onBlur: propsOnBlur, onChange: propsOnChange, ...plainTextProps  } = props

    const {
        additionalInputProps,
        clearValidationMessages,
        disabled: disabledCombined,
        onBlur: inputLogicOnBlur,
        setFieldValue,
        validateOnChange,
        value
    } = useInputLogic({ defaultValue: "", disabled, name })

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        let newValue = event?.target?.value

        if (filter) {
            newValue = newValue.replace(filter, "")
        }

        if (additionalInputProps.filter) {
            newValue = newValue.replace(additionalInputProps.filter, "")
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

    const onBlur = useCallback((event: React.FocusEvent<HTMLInputElement>) => {
        inputLogicOnBlur()

        if (propsOnBlur) {
            propsOnBlur(event)
        }
    }, [inputLogicOnBlur, propsOnBlur])

    return (
        <>
            <Input
                maxLength={additionalInputProps?.maxLength}
                disabled={disabledCombined}
                id={name}
                name={name}
                value={String(value)}
                onChange={onChange}
                onBlur={onBlur}
                {...plainTextProps}
            />
            {children}
        </>
    )
}

export default Text
