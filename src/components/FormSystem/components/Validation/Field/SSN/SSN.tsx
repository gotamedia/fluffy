import type { SSNI18n } from "@components/FormSystem/components/Validation/Field/SSN/i18nTypes"
import * as Contexts from "@components/FormSystem/contexts"
import useFormContext from "@components/FormSystem/hooks/useFormContext"
import type { FormDataValue } from "@components/FormSystem/types"
import { getAgeFromSSN } from "@components/FormSystem/utils"
import sprintf from "@utils/sprintf"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { renderToString } from "react-dom/server"
import { v4 as uuidv4 } from "uuid"
import defaultI18n from "../../../../sv.json"
import * as FSTypes from "../../../../types"
import type * as Types from "./types"

const validationName = "ssn"
const regExpWithDash = /^(20|19)\d{2}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))-\d{4}$/
const regExpWithoutDash = /^(20|19)\d{2}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))\d{4}$/

const SSN: Types.SSNComponent = (props) => {
    const {
        children,
        i18n,
        maxAge,
        minAge,
        skipDash,
        type = FSTypes.ValidationTypes.Error,
        validateOnChange
    } = props

    const [uuid] = useState(uuidv4())

    const { i18n: formI18n } = useFormContext()
    const {
        addAdditionalInputProp,
        addValidation,
        label,
        removeValidation,
        validateOnChange: fieldContextValidateOnChange
    } = useContext(Contexts.FieldContext)

    const validation = useCallback<FSTypes.Validation.Field.Function>((value: FormDataValue, fieldName: string) => {
        if (typeof value !== "string" || String(value).length === 0) {
            return []
        }

        const textKeys: (keyof SSNI18n)[] = []
        let additionalVariables = {}

        const regExp = skipDash ? regExpWithoutDash : regExpWithDash

        if (regExp.test(String(value))) {
            const age = getAgeFromSSN(String(value))

            if (typeof age === "number") {
                if (minAge && age < minAge) {
                    textKeys.push("textMinAge")
                    additionalVariables = { age, minAge }
                }
                if (maxAge && age > maxAge) {
                    textKeys.push("textMaxAge")
                    additionalVariables = { age, maxAge }
                }
            }
        } else if (skipDash && regExpWithDash.test(String(value))) {
            textKeys.push("textDash")
        } else {
            textKeys.push("text")
        }

        return textKeys.map((textKey) => ({
            fieldName,
            type,
            text: children !== undefined
                ? renderToString(<>{children}</>)
                : sprintf(
                    (
                        i18n?.[textKey] ||
                        formI18n?.validations?.field?.ssn?.[textKey] ||
                        defaultI18n.validation.field.ssn?.[textKey]
                    ),
                    { ...additionalVariables, value: String(value), fieldName, label: String(label) }
                )
        }))
    }, [children, formI18n?.validations?.field?.ssn, i18n, label, maxAge, minAge, skipDash, type])

    useEffect(() => {
        let regExp

        if (skipDash) {
            regExp = /[^0-9]/g
        } else {
            regExp = /[^0-9-]/g
        }

        addAdditionalInputProp("filter", regExp)

        return () => {
            addAdditionalInputProp("filter", undefined)
        }
    }, [addAdditionalInputProp, skipDash])

    useEffect(() => {
        addValidation(`${validationName}_${uuid}`, validation, validateOnChange || fieldContextValidateOnChange)

        return () => {
            removeValidation(`${validationName}_${uuid}`)
        }
    }, [addValidation, fieldContextValidateOnChange, removeValidation, uuid, validateOnChange, validation])

    return null
}

export default SSN
