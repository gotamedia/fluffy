import React, { useCallback, useEffect } from "react"

import PlainTimePicker from "@components/TimePicker"
import { useInputLogic } from "@components/FormSystem/hooks"
import { FormDataValue } from "@components/FormSystem/types"
import usePrevious from "@hooks/usePrevious"
import * as Types from "./types"
import * as FSTypes from "../../../types"

const buildSelectedDateProps = (value: FSTypes.FormDataValue) => {
    let selected: Date | undefined = undefined
    let startDate: Date | undefined = undefined
    let endDate: Date | undefined = undefined

    if (typeof value === "string" && value.length > 0) {
        if (value.includes("~")) {
            const dates: string[] = value.split("~")
            startDate = dates[0].length > 0 ? new Date(dates[0]) : undefined
            endDate = dates[1].length > 0 ? new Date(dates[1]) : undefined
            selected = startDate
        } else {
            selected = new Date(value)
        }
    }

    return {
        selected,
        startDate,
        endDate
    }
}

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
        let value: string | undefined

        if (Array.isArray(date)) {
            if (
                date.length === 2 &&
                (
                    (
                        date[0] instanceof Date ||
                        date[0] === undefined
                    ) ||
                    (
                        date[1] instanceof Date ||
                        date[1] === undefined
                    )
                )
            ) {
                value = date.map((dateObj) => dateObj instanceof Date ? dateObj.toISOString() : "").join("~")
            } else if (typeof date[1] === "string") {
                value = date[1] as string
            }
        } else if (date instanceof Date) {
            value = date.toISOString()
        }

        setFieldValue(name, value)
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
                {...plainTimePickerProps}
                disabled={disabledCombined}
                id={name}
                name={name}
                {...buildSelectedDateProps(value)}
                onChange={onChange}
            />
            {children}
        </>
    )
}

export default TimePicker
