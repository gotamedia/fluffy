import useFormContext from "@components/FormSystem/hooks/useFormContext"
import sprintf from "@utils/sprintf"
import { isAfter, isBefore } from "date-fns"
import React, { useCallback, useEffect, useState } from "react"
import { renderToString } from "react-dom/server"
import { v4 as uuidv4 } from "uuid"
import defaultI18n from "../../../../sv.json"
import * as FSTypes from "../../../../types"
import type * as Types from "./types"

const validationName = "dateorder"

const DateOrder: Types.DateOrderComponent = (props) => {
    const {
        children,
        i18n,
        ignoreEqualDates,
        order,
        type = FSTypes.ValidationTypes.Error,
        validateOnChange
    } = props

    const [uuid] = useState(uuidv4())

    const { addFormValidation, i18n: formI18n, getFieldLabel, removeFormValidation } = useFormContext()

    const validation = useCallback<FSTypes.Validation.Form.Function>((formData) => {
        if (!order) {
            return []
        }

        const dates = order.map((fieldName) => {
            return formData?.[fieldName]?.value ? new Date(String(formData?.[fieldName]?.value)) : undefined
        }).filter(Boolean) as Date[]

        // validate only if all dates are filled
        if (dates.length !== order.length) {
            return []
        }

        const valid = dates.reduce<boolean>((valid, date, index) => {
            if (index === 0) {
                return valid
            }

            return valid &&
                (
                    (ignoreEqualDates && !isBefore(date, dates[index - 1])) ||
                    isAfter(date, dates[index - 1])
                )
        }, true)

        if (valid) {
            return []
        }

        return order.map((fieldName) => ({
            fieldName,
            type,
            involvedFieldNames: order,
            text: children !== undefined
                ? renderToString(<>{children}</>)
                : sprintf(
                    (
                        i18n?.text ||
                        formI18n?.validations?.form?.dateOrder?.text ||
                        defaultI18n.validation.form.dateOrder.text
                    ),
                    {
                        fieldLabels: order.map((fieldName) => getFieldLabel(fieldName)).join(", ")
                    }
                )
        }))
    }, [
        children,
        formI18n?.validations?.form?.dateOrder?.text,
        getFieldLabel,
        i18n?.text,
        ignoreEqualDates,
        order,
        type
    ])

    useEffect(() => {
        addFormValidation(`${validationName}_${uuid}`, order || [], validation, validateOnChange)

        return () => {
            removeFormValidation(`${validationName}_${uuid}`)
        }
    }, [addFormValidation, order, removeFormValidation, uuid, validateOnChange, validation])

    return null
}

export default DateOrder
