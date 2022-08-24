import { getFieldDate, getUnitLabel } from "@components/FormSystem/components/Validation/Form/DateDiff/utils"
import * as Contexts from "@components/FormSystem/contexts"
import sprintf from "@utils/sprintf"
import { differenceInSeconds } from "date-fns"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { renderToString } from "react-dom/server"
import { v4 as uuidv4 } from "uuid"
import defaultI18n from "../../../../sv.json"
import * as FSTypes from "../../../../types"
import * as Types from "./types"

const validationName = "datediff"

const DateDiff: Types.DateDiffComponent = (props) => {
    const {
        children,
        diffUnit = Types.DateDiffUnits.Days,
        fieldAName,
        fieldBName,
        i18n,
        maxDiff,
        minDiff,
        type = FSTypes.ValidationTypes.Error,
        validateOnChange
    } = props

    const [uuid] = useState(uuidv4())

    const { addFormValidation, i18n: formI18n, getFieldLabel, removeFormValidation } = useContext(Contexts.FormContext)

    useEffect(() => {
        if (minDiff && maxDiff && minDiff > maxDiff) {
            console.error(`Min diff (${minDiff}) is bigger than max diff (${maxDiff}), which can't be validated.`)
        }
    }, [maxDiff, minDiff])

    const validation = useCallback<FSTypes.Validation.Form.Function>((formData) => {
        const dateA = getFieldDate(fieldAName, formData)
        const dateB = getFieldDate(fieldBName, formData)

        if (!dateA || !dateB) {
            return []
        }

        const diffInSec = Math.abs(differenceInSeconds(dateA, dateB))
        const diffInUnit = diffInSec / diffUnit
        const validationMessages: FSTypes.Validation.Message[] = []

        const variables = {
            fieldALabel: String(getFieldLabel(fieldAName)),
            fieldBLabel: String(getFieldLabel(fieldBName)),
            fieldAName,
            fieldBName,
            fieldAValue: String(formData[fieldAName]?.value),
            fieldBValue: String(formData[fieldBName]?.value),
            maxDiff: String(maxDiff),
            maxUnitLabel: !maxDiff ? "" : getUnitLabel(
                i18n,
                formI18n?.validations?.form?.dateDiff,
                defaultI18n?.validation?.form?.dateDiff,
                maxDiff,
                diffUnit
            ),
            minDiff: String(minDiff),
            minUnitLabel: !minDiff ? "" : getUnitLabel(
                i18n,
                formI18n?.validations?.form?.dateDiff,
                defaultI18n?.validation?.form?.dateDiff,
                minDiff,
                diffUnit
            ),
            diff: String(diffInUnit)
        }

        if (minDiff && diffInUnit < minDiff) {
            const minText = children !== undefined
                ? renderToString(<>{children}</>)
                : sprintf(
                    (
                        i18n?.min ||
                        formI18n?.validations?.form?.dateDiff?.min ||
                        defaultI18n.validation.form.dateDiff.min
                    ),
                    variables
                )

            validationMessages.push({
                fieldName: fieldAName,
                type,
                involvedFieldNames: [fieldAName, fieldBName],
                text: minText
            })
            validationMessages.push({
                fieldName: fieldBName,
                type,
                involvedFieldNames: [fieldAName, fieldBName],
                text: minText
            })
        }

        if (maxDiff && diffInUnit > maxDiff) {
            const maxText = children !== undefined
                ? renderToString(<>{children}</>)
                : sprintf(
                    (
                        i18n?.max ||
                        formI18n?.validations?.form?.dateDiff?.max ||
                        defaultI18n.validation.form.dateDiff.max
                    ),
                    variables
                )

            validationMessages.push({
                fieldName: fieldAName,
                type,
                involvedFieldNames: [fieldAName, fieldBName],
                text: maxText
            })
            validationMessages.push({
                fieldName: fieldBName,
                type,
                involvedFieldNames: [fieldAName, fieldBName],
                text: maxText
            })
        }

        return validationMessages
    }, [
        children,
        diffUnit,
        fieldAName,
        fieldBName,
        formI18n?.validations?.form?.dateDiff,
        getFieldLabel,
        i18n,
        maxDiff,
        minDiff,
        type
    ])

    useEffect(() => {
        addFormValidation(`${validationName}_${uuid}`, [fieldAName, fieldBName], validation, validateOnChange)

        return () => {
            removeFormValidation(`${validationName}_${uuid}`)
        }
    }, [addFormValidation, fieldAName, fieldBName, removeFormValidation, uuid, validateOnChange, validation])

    return null
}

export default DateDiff
