import React, { useCallback, useEffect } from "react"

import PlainDatePicker from "@components/DatePicker"
import { useInputLogic } from "@components/FormSystem/hooks"
import { FormDataValue } from "@components/FormSystem/types"
import { buildDatePickerValueProps, getDateValue } from "@components/FormSystem/utils"
import usePrevious from "@hooks/usePrevious"
import * as Types from "./types"

const DatePicker: Types.DatePickerComponent = (props) => {
    const { children, disabled, name, onChange: propsOnChange, ...plainDatePickerProps } = props

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
            <PlainDatePicker
                disabled={disabledCombined}
                id={name}
                name={name}
                onChange={onChange}
                minDate={additionalInputProps.minDate}
                maxDate={additionalInputProps.maxDate}
                {...buildDatePickerValueProps(value)}
                {...plainDatePickerProps}
            />
            {children}
        </>
    )
}

export default DatePicker
