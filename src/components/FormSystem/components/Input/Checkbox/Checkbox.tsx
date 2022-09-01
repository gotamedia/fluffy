import PlainCheckbox from "@components/Checkbox"
import React, { forwardRef, useCallback, useEffect } from "react"

import { useInputLogic } from "@components/FormSystem/hooks"
import type { FormDataValue } from "@components/FormSystem/types"
import usePrevious from "@hooks/usePrevious"
import type * as Types from "./types"

const Checkbox: Types.CheckboxComponent = forwardRef((props, ref) => {
    const { children, disabled, name, onChange: propsOnChange, ...plainCheckboxProps } = props

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
            <PlainCheckbox
                ref={ref}
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
})

export default Checkbox
