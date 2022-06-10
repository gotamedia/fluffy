import * as Contexts from "@components/FormSystem/contexts"
import { FormDataValue } from "@components/FormSystem/types"
import sprintf from "@utils/sprintf"
import { useCallback, useContext, useEffect } from "react"
import * as FSTypes from "../../../../types"
import * as Types from "./types"
import defaultI18n from "../../../../sv.json"

const validationName = "required"

const Required: Types.RequiredComponent = (props) => {
    const {
        type = FSTypes.Validation.Types.Error,
        i18n
    } = props

    const { i18n: formI18n } = useContext(Contexts.FormContext)
    const { addValidation, removeValidation, label } = useContext(Contexts.FieldContext)

    const validation = useCallback<FSTypes.Validation.Field.Function>((value: FormDataValue, fieldName: string) => {
        if (String(value).length > 0) {
            return []
        }

        return [
            {
                fieldName,
                type,
                text: sprintf(
                    i18n?.text || formI18n?.validations?.field?.required?.text || defaultI18n.validation.field.required.text,
                    { value: String(value), fieldName, label: String(label) }
                )
            }
        ]
    }, [formI18n?.validations?.field?.required?.text, i18n?.text, label, type])

    useEffect(() => {
        addValidation(validationName, validation)

        return () => {
            removeValidation(validationName)
        }
    }, [addValidation, removeValidation, validation])

    return null
}

export default Required
