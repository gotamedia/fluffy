import useFieldContext from "@components/FormSystem/hooks/useFieldContext"
import useFormContext from "@components/FormSystem/hooks/useFormContext"
import type { FormDataValue } from "@components/FormSystem/types"
import sprintf from "@utils/sprintf"
import { addDays, format, isAfter, isBefore, subDays } from "date-fns"
import React, { useCallback, useEffect, useState } from "react"
import { renderToString } from "react-dom/server"
import { v4 as uuidv4 } from "uuid"
import defaultI18n from "../../../../sv.json"
import * as FSTypes from "../../../../types"
import type * as Types from "./types"

const validationName = "date"

const DateValidation: Types.DateComponent = (props) => {
    const {
        children,
        i18n,
        max,
        maxExclusive,
        min,
        minExclusive,
        type = FSTypes.ValidationTypes.Error,
        validateOnChange
    } = props

    const [uuid] = useState(uuidv4())

    const { i18n: formI18n } = useFormContext()
    const {
        addAdditionalInputProp,
        addValidation,
        removeValidation,
        label,
        validateOnChange: fieldContextValidateOnChange
    } = useFieldContext()

    const [minDate, setMinDate] = useState<Date | undefined>()
    const [maxDate, setMaxDate] = useState<Date | undefined>()

    useEffect(() => {
        let newMinDate
        let newMaxDate

        if (min) {
            newMinDate = min instanceof Date ? min : new Date(min)

            if (minExclusive) {
                newMinDate = addDays(newMinDate, 1)
            }
        }
        if (max) {
            newMaxDate = max instanceof Date ? max : new Date(max)

            if (maxExclusive) {
                newMaxDate = subDays(newMaxDate, 1)
            }
        }

        setMinDate(newMinDate)
        setMaxDate(newMaxDate)
    }, [max, maxExclusive, min, minExclusive])

    useEffect(() => {
        if (minDate && maxDate && isBefore(maxDate, minDate)) {
            console.error(`Max date (${format(maxDate, "yyyy-MM-dd HH:mm")}) is before min date (${format(minDate, "yyyy-MM-dd HH:mm")}), which can't be validated.`)
        }

        addAdditionalInputProp("minDate", minDate ? minDate : undefined)
        addAdditionalInputProp("maxDate", maxDate ? maxDate : undefined)

        return () => {
            addAdditionalInputProp("minDate", undefined)
            addAdditionalInputProp("maxDate", undefined)
        }
    }, [addAdditionalInputProp, maxDate, minDate])

    const validation = useCallback<FSTypes.Validation.Field.Function>((value: FormDataValue, fieldName: string) => {
        const validationMessages: FSTypes.Validation.Message[] = []
        const date = value && typeof value === "string" ? Date.parse(String(value)) : undefined

        if (!date || isNaN(date)) {
            return []
        }

        const variables = {
            minDate: minDate ? format(minDate, "yyyy-MM-dd") : "",
            minTime: minDate ? format(minDate, "HH:mm") : "",
            minDateTime: minDate ? format(minDate, "yyyy-MM-dd HH:mm") : "",
            maxDate: maxDate ? format(maxDate, "yyyy-MM-dd") : "",
            maxTime: maxDate ? format(maxDate, "HH:mm") : "",
            maxDateTime: maxDate ? format(maxDate, "yyyy-MM-dd HH:mm") : "",
            valueDate: format(date, "yyyy-MM-dd"),
            valueTime: format(date, "HH:mm"),
            valueDateTime: format(date, "yyyy-MM-dd HH:mm"),
            fieldName,
            label: String(label)
        }

        if (minDate && isBefore(date, minDate)) {
            validationMessages.push({
                fieldName,
                type,
                text: children !== undefined
                    ? renderToString(<>{children}</>)
                    : sprintf(
                        (
                            i18n?.min ||
                            formI18n?.validations?.field?.date?.min ||
                            defaultI18n.validation.field.date?.min
                        ),
                        variables
                    )
            })
        }

        if (maxDate && isAfter(date, maxDate)) {
            validationMessages.push({
                fieldName,
                type,
                text: children !== undefined
                    ? renderToString(<>{children}</>)
                    : sprintf(
                        (
                            i18n?.max ||
                            formI18n?.validations?.field?.date?.max ||
                            defaultI18n.validation.field.date?.max
                        ),
                        variables
                    )
            })
        }

        return validationMessages
    }, [
        children,
        formI18n?.validations?.field?.date?.max,
        formI18n?.validations?.field?.date?.min,
        i18n?.max,
        i18n?.min,
        label,
        maxDate,
        minDate,
        type
    ])

    useEffect(() => {
        addValidation(`${validationName}_${uuid}`, validation, validateOnChange || fieldContextValidateOnChange)

        return () => {
            removeValidation(`${validationName}_${uuid}`)
        }
    }, [addValidation, fieldContextValidateOnChange, removeValidation, uuid, validateOnChange, validation])

    return null
}

export default DateValidation
