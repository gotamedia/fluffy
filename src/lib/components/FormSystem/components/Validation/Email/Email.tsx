import * as Contexts from "@components/FormSystem/contexts"
import { FormDataValue } from "@components/FormSystem/types"
import sprintf from "@utils/sprintf"
import { useCallback, useContext, useEffect } from "react"
import * as FSTypes from "../../../types"
import * as Types from "./types"
import defaultI18n from "../../../sv.json"

const validationName = "email"
const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const Email: Types.EmailComponent = (props) => {
    const {
        type = FSTypes.Validation.Types.Error,
        i18n
    } = props

    const { i18n: formI18n } = useContext(Contexts.FormContext)
    const { addValidation, removeValidation, label } = useContext(Contexts.FieldContext)

    const validation = useCallback((value: FormDataValue, name: string) => {
        if (String(value).length === 0 || regExp.test(String(value))) {
            return []
        }

        return [
            {
                type,
                text: sprintf(
                    i18n?.text || formI18n?.validations?.email?.text || defaultI18n.validation.email.text,
                    { value: String(value), name, label: String(label) }
                )
            }
        ]
    }, [formI18n?.validations?.email?.text, i18n?.text, label, type])

    useEffect(() => {
        addValidation(validationName, validation)

        return () => {
            removeValidation(validationName)
        }
    }, [addValidation, removeValidation, validation])

    return null
}

export default Email
