import SwitchButton from "@components/SwitchButton"
import React, { useCallback, useEffect } from "react"

import { useInputLogic } from "@components/FormSystem/hooks"
import { FormDataValue } from "@components/FormSystem/types"
import usePrevious from "@hooks/usePrevious"
import * as Types from "./types"

const Switch: Types.SwitchComponent = (props) => {
    const { children, disabled, name, readOnly } = props

    const {
        clearValidationMessages,
        disabled: disabledCombined,
        getFieldValue,
        onBlur,
        setFieldValue,
        value
    } = useInputLogic({ defaultValue: false, disabled, name })
    const previousValue: FormDataValue | undefined = usePrevious(value)

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(name, event?.target?.checked)
        clearValidationMessages(name)
    }, [setFieldValue, name, clearValidationMessages])

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
                readOnly={readOnly}
                checked={Boolean(getFieldValue(name))}
                onChange={onChange}
            />
            {children}
        </>
    )
}

export default Switch
