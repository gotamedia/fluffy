import type { LengthI18n } from "@components/FormSystem/components/Validation/Field/Length/i18nTypes"
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

const validationName = "length"

const Length: Types.LengthComponent = (props) => {
    const {
        children,
        exactly,
        i18n,
        min,
        max,
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
    } = useFieldContext()

    useEffect(() => {
        // check for undefined to allow 0 as well
        if (exactly !== undefined && (min !== undefined || max !== undefined)) {
            console.error("Warning: You provided a `exactly` prop to a FS.Validation.Length while also providing a `min` and/or `max` prop")
        }
    }, [exactly, max, min])

    useEffect(() => {
        addAdditionalInputProp("maxLength", exactly || max ? exactly || max : undefined)

        return () => {
            addAdditionalInputProp("maxLength", undefined)
        }
    }, [addAdditionalInputProp, exactly, max])

    const validation = useCallback<FSTypes.Validation.Field.Function>((value: FormDataValue, fieldName: string) => {
        if (typeof value !== "string" || value.length === 0) {
            return []
        }

        let textKey: keyof LengthI18n | undefined

        if (exactly !== undefined) {
            if (value.length !== exactly) {
                textKey = "exactly"
            }
        } else {
            if (min !== undefined && max !== undefined) {
                if (min === max) {
                    if (value.length !== min) {
                        textKey = "exactly"
                    }
                } else {
                    if (value.length < min || value.length > max) {
                        textKey = "between"
                    }
                }
            } else if (min !== undefined) {
                if (value.length < min) {
                    textKey = "min"
                }
            } else if (max !== undefined) {
                if (value.length > max) {
                    textKey = "max"
                }
            }
        }

        if (textKey) {
            return [
                {
                    fieldName,
                    type,
                    text: children !== undefined
                        ? renderToString(<>{children}</>)
                        : sprintf(
                            (
                                i18n?.[textKey] ||
                                formI18n?.validations?.field?.length?.[textKey] ||
                                defaultI18n.validation.field.length?.[textKey]
                            ),
                            {
                                value: String(value),
                                fieldName,
                                label: String(label),
                                exactly: exactly === undefined && min === max ? String(min) : String(exactly),
                                max: String(max),
                                min: String(min)
                            }
                        )
                }
            ]
        }

        return []
    }, [children, exactly, formI18n?.validations?.field?.length, i18n, label, max, min, type])

    useEffect(() => {
        addValidation(`${validationName}_${uuid}`, validation, validateOnChange || fieldContextValidateOnChange)

        return () => {
            removeValidation(`${validationName}_${uuid}`)
        }
    }, [addValidation, fieldContextValidateOnChange, removeValidation, uuid, validateOnChange, validation])

    return null
}

export default Length
