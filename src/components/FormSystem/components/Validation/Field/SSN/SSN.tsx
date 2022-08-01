import * as Contexts from "@components/FormSystem/contexts"
import { FormDataValue } from "@components/FormSystem/types"
import sprintf from "@utils/sprintf"
import React, { useCallback, useContext, useEffect, useState } from "react"
import { renderToString } from "react-dom/server"
import { v4 as uuidv4 } from "uuid"
import * as FSTypes from "../../../../types"
import * as Types from "./types"
import defaultI18n from "../../../../sv.json"

const validationName = "ssn"
const regExp = /^(20|19)\d{2}((0[1-9])|(1[0-2]))((0[1-9])|([1-2][0-9])|(3[0-1]))-\d{4}$/

const SSN: Types.SSNComponent = (props) => {
    const {
        children,
        i18n,
        type = FSTypes.Validation.Types.Error
    } = props

    const [uuid] = useState(uuidv4())

    const { i18n: formI18n } = useContext(Contexts.FormContext)
    const { addValidation, removeValidation, label } = useContext(Contexts.FieldContext)

    const validation = useCallback<FSTypes.Validation.Field.Function>((value: FormDataValue, fieldName: string) => {
        if (typeof value !== "string" || String(value).length === 0 || regExp.test(String(value))) {
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
                            formI18n?.validations?.field?.ssn?.text ||
                            defaultI18n.validation.field.ssn.text
                        ),
                        { value: String(value), fieldName, label: String(label) }
                    )
            }
        ]
    }, [children, formI18n?.validations?.field?.ssn?.text, i18n?.text, label, type])

    useEffect(() => {
        addValidation(`${validationName}_${uuid}`, validation)

        return () => {
            removeValidation(`${validationName}_${uuid}`)
        }
    }, [addValidation, removeValidation, uuid, validation])

    return null
}

export default SSN
