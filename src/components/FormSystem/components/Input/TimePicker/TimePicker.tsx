import React, { useCallback, useEffect } from "react"

import PlainTimePicker from "@components/TimePicker"
import { useInputLogic } from "@components/FormSystem/hooks"
import { FormDataValue } from "@components/FormSystem/types"
import { buildDatePickerValueProps, getDateValue } from "@components/FormSystem/utils"
import usePrevious from "@hooks/usePrevious"
import * as Types from "./types"

const TimePicker: Types.TimePickerComponent = (props) => {
    const { children, disabled, name, onChange: propsOnChange, ...plainTimePickerProps } = props

    const {
        clearValidationMessages,
        disabled: disabledCombined,
        onBlur,
        setFieldValue,
        value
    } = useInputLogic({ defaultValue: "", disabled, name })
    const previousValue: FormDataValue | undefined = usePrevious(value)

    const onChange = useCallback((
        date: Date | null | [Date | null, Date | null],
        event: React.SyntheticEvent<any> | undefined
    ) => {
        setFieldValue(name, getDateValue(date))
        clearValidationMessages(name)

        if (propsOnChange) {
            propsOnChange(date as Date | null, event)
        }
    }, [setFieldValue, name, clearValidationMessages, propsOnChange])

    useEffect(() => {
        if (previousValue !== value) {
            onBlur()
        }
    }, [onBlur, previousValue, value])

    return (
        <>
            <PlainTimePicker
                disabled={disabledCombined}
                id={name}
                name={name}
                onChange={onChange}
                {...buildDatePickerValueProps(value)}
                {...plainTimePickerProps}
            />
            {children}
        </>
    )
}

export default TimePicker
