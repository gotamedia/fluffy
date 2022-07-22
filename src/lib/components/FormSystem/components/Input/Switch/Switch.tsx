import React, { useCallback, useEffect } from "react"

import { useInputLogin } from "@components/FormSystem/hooks"
import { FormDataValue } from "@components/FormSystem/types"
import BasicSwitch from "@components/Switch"
import usePrevious from "@hooks/usePrevious"
import * as FSTypes from "../../../types"
import * as Types from "./types"

const Switch: Types.SwitchComponent = (props) => {
    const { children, disabled, name, readOnly } = props

    const {
        clearValidationMessages,
        disabled: disabledCombined,
        getFieldValue,
        onBlur,
        setFieldValue,
        validationType,
        value
    } = useInputLogin({ defaultValue: false, disabled, name })
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
            <BasicSwitch
                label={"Banana"}
                disabled={disabledCombined}
                id={name}
                name={name}
                readOnly={readOnly}
                checked={Boolean(getFieldValue(name))}
                onChange={onChange}
                invalid={validationType === FSTypes.Validation.Types.Error}
            />
            {children}
        </>
    )
}

export default Switch
