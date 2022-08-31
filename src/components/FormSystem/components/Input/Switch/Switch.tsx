import SwitchButton from "@components/SwitchButton"
import React, { useCallback, useEffect } from "react"

import { useInputLogic } from "@components/FormSystem/hooks"
import type { FormDataValue } from "@components/FormSystem/types"
import usePrevious from "@hooks/usePrevious"
import type * as Types from "./types"

const Switch: Types.SwitchComponent = (props) => {
    const { children, disabled, name, onChange: propsOnChange, ...plainSwitchProps } = props

    const {
        clearValidationMessages,
        disabled: disabledCombined,
        onBlur,
        setFieldValue,
        validateOnChange,
        value
    } = useInputLogic({ defaultValue: false, disabled, name })
    const previousValue: FormDataValue | undefined = usePrevious(value)

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(name, event?.target?.checked)
        clearValidationMessages(name)
        validateOnChange(name, event?.target?.checked)

        if (propsOnChange) {
            propsOnChange(event)
        }
    }, [setFieldValue, name, clearValidationMessages, validateOnChange, propsOnChange])

    useEffect(() => {
        if (previousValue !== value) {
            onBlur()
        }
    }, [onBlur, previousValue, value])

    return (
        <>
            <SwitchButton
                disabled={disabledCombined}
                id={name}
                name={name}
                checked={Boolean(value)}
                onChange={onChange}
                {...plainSwitchProps}
            />
            {children}
        </>
    )
}

export default Switch
