import * as Contexts from "@components/FormSystem/contexts"
import { FormDataValue } from "@components/FormSystem/types"
import sprintf from "@utils/sprintf"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { renderToString } from "react-dom/server"
import { v4 as uuidv4 } from "uuid"
import defaultI18n from "../../../../sv.json"
import * as FSTypes from "../../../../types"
import * as Types from "./types"

const validationName = "required"

const Required: Types.RequiredComponent = (props) => {
    const {
        children,
        i18n,
        type = FSTypes.ValidationTypes.Error,
        validateOnChange
    } = props

    const [uuid] = useState(uuidv4())

    const { i18n: formI18n } = useContext(Contexts.FormContext)
    const {
        addValidation,
        label,
        removeValidation,
        setIsRequired,
        validateOnChange: fieldContextValidateOnChange
    } = useContext(Contexts.FieldContext)

    const validation = useCallback<FSTypes.Validation.Field.Function>((value: FormDataValue, fieldName: string) => {
        if (
            (typeof value === "string" && value.length > 0) ||
            (typeof value === "boolean" && value)
        ) {
            return []
        }

        return [
            {
                fieldName,
                type,
                text: children !== undefined
                    ? renderToString(<>{children}</>)
                    : sprintf(
                        (
                            i18n?.text ||
                            formI18n?.validations?.field?.required?.text ||
                            defaultI18n.validation.field.required.text
                        ),
                        { value: String(value), fieldName, label: String(label) }
                )
            }
        ]
    }, [children, formI18n?.validations?.field?.required?.text, i18n?.text, label, type])

    useEffect(() => {
        addValidation(`${validationName}_${uuid}`, validation, validateOnChange || fieldContextValidateOnChange)
        setIsRequired(true)

        return () => {
            removeValidation(`${validationName}_${uuid}`)
            setIsRequired(false)
        }
    }, [
        addValidation,
        fieldContextValidateOnChange,
        removeValidation,
        setIsRequired,
        uuid,
        validateOnChange,
        validation
    ])

    return null
}

export default Required
