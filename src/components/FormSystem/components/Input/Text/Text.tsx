import { useInputLogic } from "@components/FormSystem/hooks"
import Input from "@components/Input"
import React, { useCallback } from "react"
import * as Types from "./types"

const Text: Types.TextComponent = (props) => {
    const { children, disabled, name, readOnly } = props

    const {
        clearValidationMessages,
        disabled: disabledCombined,
        getFieldValue,
        onBlur,
        setFieldValue,
    } = useInputLogic({ defaultValue: "", disabled, name })

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(name, event?.target?.value)
        clearValidationMessages(name)
    }, [setFieldValue, name, clearValidationMessages])

    return (
        <>
            <Input
                disabled={disabledCombined}
                id={name}
                name={name}
                readOnly={readOnly}
                value={String(getFieldValue(name) || "")}
                onChange={onChange}
                onBlur={onBlur}
            />
            {children}
        </>
    )
}

export default Text
