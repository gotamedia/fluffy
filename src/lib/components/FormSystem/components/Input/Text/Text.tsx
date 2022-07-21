import { useInputLogin } from "@components/FormSystem/hooks"
import React, { useCallback } from "react"
import * as Styled from "./style"
import * as Types from "./types"

const Text: Types.TextComponent = (props) => {
    const { children, disabled, name, readOnly } = props

    const {
        clearValidationMessages,
        disabled: disabledCombined,
        getFieldValue,
        onBlur,
        setFieldValue,
        theme,
        validationType
    } = useInputLogin({ disabled, name })

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(name, event?.target?.value)
        clearValidationMessages(name)
    }, [setFieldValue, name, clearValidationMessages])

    return (
        <>
            <Styled.Text
                $theme={theme}
                disabled={disabledCombined}
                id={name}
                name={name}
                readOnly={readOnly}
                validationType={validationType}
                value={String(getFieldValue(name) || "")}
                onChange={onChange}
                onBlur={onBlur}
            />
            {children}
        </>
    )
}

export default Text
