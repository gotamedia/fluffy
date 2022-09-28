import type { ValueI18n } from "@components/FormSystem/components/Validation/Field/Value/i18nTypes"
import useFieldContext from "@components/FormSystem/hooks/useFieldContext"
import useFormContext from "@components/FormSystem/hooks/useFormContext"
import type { FormDataValue } from "@components/FormSystem/types"
import sprintf from "@utils/sprintf"
import React, { useCallback, useEffect, useState } from "react"
import { renderToString } from "react-dom/server"
import { v4 as uuidv4 } from "uuid"
import defaultI18n from "../../../../sv.json"
import * as FSTypes from "../../../../types"
import type * as Types from "./types"

const validationName = "value"

const Value: Types.ValueComponent = (props) => {
    const {
        children,
        i18n,
        invertedValue,
        type = FSTypes.ValidationTypes.Error,
        validateOnChange,
        value: compareValue
    } = props

    const [uuid] = useState(uuidv4())

    const { i18n: formI18n } = useFormContext()
    const {
        addValidation,
        label,
        removeValidation,
        validateOnChange: fieldContextValidateOnChange
    } = useFieldContext()

    const validation = useCallback<FSTypes.Validation.Field.Function>((value: FormDataValue, fieldName: string) => {
        if (
            String(value).length > 0 && (
                (
                    typeof value === typeof compareValue &&
                    (
                        (value !== compareValue && !invertedValue) ||
                        (value === compareValue && invertedValue)
                    )
                ) ||
                (
                    typeof value === "string" &&
                    typeof compareValue === "object" &&
                    Boolean(String(value).match(compareValue)) !== invertedValue
                )
            )
        ) {
            const textKey: keyof ValueI18n = invertedValue ? "textInverted" : "text"

            return [
                {
                    fieldName,
                    type,
                    text: children !== undefined
                        ? renderToString(<>{children}</>)
                        : sprintf(
                            (
                                i18n?.[textKey] ||
                                formI18n?.validations?.field?.value?.[textKey] ||
                                defaultI18n.validation.field.value[textKey]
                            ),
                            {
                                value: String(value),
                                fieldName,
                                label: String(label),
                                compareValue: String(compareValue)
                            }
                        )
                }
            ]
        }

        return []
    }, [children, compareValue, formI18n?.validations?.field?.value, i18n, invertedValue, label, type])

    useEffect(() => {
        addValidation(`${validationName}_${uuid}`, validation, validateOnChange || fieldContextValidateOnChange)

        return () => {
            removeValidation(`${validationName}_${uuid}`)
        }
    }, [addValidation, fieldContextValidateOnChange, removeValidation, uuid, validateOnChange, validation])

    return null
}

export default Value
