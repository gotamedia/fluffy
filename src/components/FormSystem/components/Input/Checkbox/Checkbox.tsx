import PlainCheckbox from "@components/Checkbox"
import React, { useCallback, useEffect } from "react"

import { useInputLogic } from "@components/FormSystem/hooks"
import { FormDataValue } from "@components/FormSystem/types"
import usePrevious from "@hooks/usePrevious"
import * as Types from "./types"

const Checkbox: Types.CheckboxComponent = (props) => {
    const { children, disabled, name, onChange: propsOnChange, ...plainCheckboxProps } = props

    const {
        clearValidationMessages,
        disabled: disabledCombined,
        onBlur,
        setFieldValue,
        validateInstantUpdate,
        value
    } = useInputLogic({ defaultValue: false, disabled, name })
    const previousValue: FormDataValue | undefined = usePrevious(value)

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setFieldValue(name, event?.target?.checked)
        clearValidationMessages(name)
        validateInstantUpdate(name, event?.target?.checked)

        if (propsOnChange) {
            propsOnChange(event)
        }
    }, [setFieldValue, name, clearValidationMessages, validateInstantUpdate, propsOnChange])

    useEffect(() => {
        if (previousValue !== value) {
            onBlur()
        }
    }, [onBlur, previousValue, value])

    return (
        <>
            <PlainCheckbox
                disabled={disabledCombined}
                id={name}
                name={name}
                checked={Boolean(value)}
                {...plainCheckboxProps}
                onChange={onChange}
            />
            {children}
        </>
    )
}

export default Checkbox
