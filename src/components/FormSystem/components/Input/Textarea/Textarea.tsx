import React, { useCallback } from "react"

import { useInputLogic } from "@components/FormSystem/hooks"
import PlainTextarea from "@components/Textarea"
import * as Types from "./types"

const Textarea: Types.TextareaComponent = (props) => {
    const { children, disabled, name, onBlur, onChange, readOnly, ...textareaProps } = props

    const {
        clearValidationMessages,
        disabled: disabledCombined,
        onBlur: onBlurLogic,
        setFieldValue,
        value
    } = useInputLogic({ defaultValue: "", disabled, name })

    const onBlurHandler = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
        onBlurLogic()

        if (onBlur) {
            onBlur(event)
        }
    }, [onBlur, onBlurLogic])

    const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFieldValue(name, event?.target?.value)
        clearValidationMessages(name)

        if (onChange) {
            onChange(event)
        }
    }, [setFieldValue, name, clearValidationMessages, onChange])

    return (
        <>
            <PlainTextarea
                {...textareaProps}
                disabled={disabledCombined}
                id={name}
                name={name}
                readOnly={readOnly}
                value={String(value)}
                onChange={onChangeHandler}
                onBlur={onBlurHandler}
            />
            {children}
        </>
    )
}

export default Textarea
