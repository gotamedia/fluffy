import React, { useCallback } from "react"

import { useInputLogic } from "@components/FormSystem/hooks"
import PlainTextarea from "@components/Textarea"
import * as Types from "./types"

const Textarea: Types.TextareaComponent = (props) => {
    const { children, disabled, name, onBlur: propsOnBlur, onChange: propsOnChange, ...textareaProps } = props

    const {
        clearValidationMessages,
        disabled: disabledCombined,
        onBlur: inputLogicOnBlur,
        setFieldValue,
        validateInstantUpdate,
        value
    } = useInputLogic({ defaultValue: "", disabled, name })

    const onBlur = useCallback((event: React.FocusEvent<HTMLTextAreaElement>) => {
        inputLogicOnBlur()

        if (propsOnBlur) {
            propsOnBlur(event)
        }
    }, [propsOnBlur, inputLogicOnBlur])

    const onChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFieldValue(name, event?.target?.value)
        clearValidationMessages(name)
        validateInstantUpdate(name, event?.target?.value)

        if (propsOnChange) {
            propsOnChange(event)
        }
    }, [setFieldValue, name, clearValidationMessages, validateInstantUpdate, propsOnChange])

    return (
        <>
            <PlainTextarea
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
