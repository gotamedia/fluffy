import React, { forwardRef, useCallback, useEffect } from "react"

import PlainTimePicker from "@components/TimePicker"
import { useInputLogic } from "@components/FormSystem/hooks"
import type { FormDataValue } from "@components/FormSystem/types"
import { buildDatePickerValueProps, getDateValue } from "@components/FormSystem/utils"
import usePrevious from "@hooks/usePrevious"
import type * as Types from "./types"

const TimePicker: Types.TimePickerComponent = forwardRef((props, ref) => {
    const { children, disabled, name, onChange: propsOnChange, ...plainTimePickerProps } = props

    const {
        additionalInputProps,
        clearValidationMessages,
        disabled: disabledCombined,
        onBlur,
        setFieldValue,
        validateOnChange,
        value
    } = useInputLogic({ defaultValue: "", disabled, name })
    const previousValue: FormDataValue | undefined = usePrevious(value)

    const onChange = useCallback((
        date: Date | null | [Date | null, Date | null],
        event: React.SyntheticEvent<any> | undefined
    ) => {
        setFieldValue(name, getDateValue(date))
        clearValidationMessages(name)
        validateOnChange(name, getDateValue(date))

        if (propsOnChange) {
            propsOnChange(date as Date | null, event)
        }
    }, [setFieldValue, name, clearValidationMessages, validateOnChange, propsOnChange])

    useEffect(() => {
        if (previousValue !== value) {
            onBlur()
        }
    }, [onBlur, previousValue, value])

    return (
        <>
            <PlainTimePicker
                ref={ref}
                disabled={disabledCombined}
                id={name}
                name={name}
                onChange={onChange}
                minDate={additionalInputProps.minDate}
                maxDate={additionalInputProps.maxDate}
                {...buildDatePickerValueProps(value)}
                {...plainTimePickerProps}
            />
            {children}
        </>
    )
})

export default TimePicker
