import { getDates } from "@components/FormSystem/components/Validation/Form/DateRange/utils"
import * as Contexts from "@components/FormSystem/contexts"
import sprintf from "@utils/sprintf"
import { format, isAfter, isBefore } from "date-fns"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { renderToString } from "react-dom/server"
import { v4 as uuidv4 } from "uuid"
import defaultI18n from "../../../../sv.json"
import * as FSTypes from "../../../../types"
import * as Types from "./types"

const validationName = "daterange"

const DateRange: Types.DateRangeComponent = (props) => {
    const {
        blockSelection,
        children,
        i18n,
        fieldName,
        maxExclusive,
        maxFieldName,
        minExclusive,
        minFieldName,
        type = FSTypes.ValidationTypes.Error,
        validateOnChange
    } = props

    const [uuid] = useState(uuidv4())

    const { addAdditionalInputProp, addFormValidation, formData, i18n: formI18n, getFieldLabel, removeFormValidation } = useContext(Contexts.FormContext)

    useEffect(() => {
        if (!blockSelection) {
            return
        }

        const { maxDate, minDate } = getDates(
            formData,
            fieldName,
            minFieldName,
            minExclusive,
            maxFieldName,
            maxExclusive
        )

        const currentMinDate = formData?.[fieldName]?.additionalInputProps?.minDate
        const currentMaxDate = formData?.[fieldName]?.additionalInputProps?.maxDate

        if (
            (
                !currentMinDate &&
                minDate
            ) ||
            (
                currentMinDate &&
                !minDate
            ) ||
            (
                currentMinDate &&
                minDate &&
                typeof currentMinDate === "object" &&
                currentMinDate.getTime() !== minDate.getTime()
            )
        ) {
            addAdditionalInputProp(fieldName, "minDate", minDate)
        }

        if (
            (
                !currentMaxDate &&
                maxDate
            ) ||
            (
                currentMaxDate &&
                !maxDate
            ) ||
            (
                currentMaxDate &&
                maxDate &&
                typeof currentMaxDate === "object" &&
                currentMaxDate.getTime() !== maxDate.getTime()
            )
        ) {
            addAdditionalInputProp(fieldName, "maxDate", maxDate)
        }
    }, [addAdditionalInputProp, blockSelection, fieldName, formData, maxExclusive, maxFieldName, minExclusive, minFieldName])

    useEffect(() => {
        return () => {
            addAdditionalInputProp(fieldName, "minDate", undefined)
            addAdditionalInputProp(fieldName, "maxDate", undefined)
        }
    }, [addAdditionalInputProp, fieldName])

    useEffect(() => {
        if (!blockSelection) {
            addAdditionalInputProp(fieldName, "minDate", undefined)
            addAdditionalInputProp(fieldName, "maxDate", undefined)
        }
    }, [addAdditionalInputProp, blockSelection, fieldName])

    const validation = useCallback<FSTypes.Validation.Form.Function>((validationFormData) => {
        const { compareDate, maxDate, minDate } = getDates(
            validationFormData,
            fieldName,
            minFieldName,
            minExclusive,
            maxFieldName,
            maxExclusive
        )
        const validationMessages: FSTypes.Validation.Message[] = []

        const variables = {
            fieldName: fieldName || "",
            label: fieldName && getFieldLabel(fieldName) || "",
            minDate: minDate ? format(minDate, "yyyy-MM-dd") : "",
            minDateTime: minDate ? format(minDate, "yyyy-MM-dd HH:mm") : "",
            minLabel: minFieldName && getFieldLabel(minFieldName) || "",
            minTime: minDate ? format(minDate, "HH:mm") : "",
            maxDate: maxDate ? format(maxDate, "yyyy-MM-dd") : "",
            maxDateTime: maxDate ? format(maxDate, "yyyy-MM-dd HH:mm") : "",
            maxLabel: maxFieldName && getFieldLabel(maxFieldName) || "",
            maxTime: maxDate ? format(maxDate, "HH:mm") : "",
            valueDate: compareDate ? format(compareDate, "yyyy-MM-dd") : "",
            valueDateTime: compareDate ? format(compareDate, "yyyy-MM-dd HH:mm") : "",
            valueTime: compareDate ? format(compareDate, "HH:mm") : ""
        }

        if (compareDate && minDate && isBefore(compareDate, minDate)) {
            validationMessages.push({
                fieldName,
                involvedFieldNames: [minFieldName] as string[],
                type,
                text: children !== undefined
                    ? renderToString(<>{children}</>)
                    : sprintf(
                        (
                            i18n?.min ||
                            formI18n?.validations?.form?.dateRange?.min ||
                            defaultI18n.validation.form.dateRange?.min
                        ),
                        variables
                    )
            })
        }

        if (compareDate && maxDate && isAfter(compareDate, maxDate)) {
            validationMessages.push({
                fieldName,
                involvedFieldNames: [maxFieldName] as string[],
                type,
                text: children !== undefined
                    ? renderToString(<>{children}</>)
                    : sprintf(
                        (
                            i18n?.max ||
                            formI18n?.validations?.form?.dateRange?.max ||
                            defaultI18n.validation.form.dateRange?.max
                        ),
                        variables
                    )
            })
        }

        return validationMessages
    }, [
        children,
        fieldName,
        formI18n?.validations?.form?.dateRange?.max,
        formI18n?.validations?.form?.dateRange?.min,
        getFieldLabel,
        i18n?.max,
        i18n?.min,
        maxExclusive,
        maxFieldName,
        minExclusive,
        minFieldName,
        type
    ])

    useEffect(() => {
        addFormValidation(
            `${validationName}_${uuid}`,
            [fieldName, maxFieldName, minFieldName].filter(Boolean) as string[],
            validation,
            validateOnChange
        )

        return () => {
            removeFormValidation(`${validationName}_${uuid}`)
        }
    }, [
        addFormValidation,
        fieldName,
        maxFieldName,
        minFieldName,
        removeFormValidation,
        uuid,
        validateOnChange,
        validation
    ])

    return null
}

export default DateRange
