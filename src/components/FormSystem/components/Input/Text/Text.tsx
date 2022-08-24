import { useInputLogic } from "@components/FormSystem/hooks"
import Input from "@components/Input"
import React, { useCallback } from "react"
import * as Types from "./types"

const Text: Types.TextComponent = (props) => {
    const { children, disabled, name, onBlur: propsOnBlur, onChange: propsOnChange, ...plainTextProps  } = props

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
        setFieldValue(name, event?.target?.value)
        clearValidationMessages(name)
        validateOnChange(name, event?.target?.value)

        if (propsOnChange) {
            propsOnChange(event)
        }
    }, [setFieldValue, name, clearValidationMessages, validateOnChange, propsOnChange])

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
