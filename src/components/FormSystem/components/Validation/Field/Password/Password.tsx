import { PasswordI18n } from "@components/FormSystem/components/Validation/Field/Password/i18nTypes"
import * as Contexts from "@components/FormSystem/contexts"
import { FormDataValue } from "@components/FormSystem/types"
import {
    containsGiven,
    containsLowerCase,
    containsNumber,
    containsSpecialChars,
    containsUpperCase
} from "@components/FormSystem/utils"
import sprintf from "@utils/sprintf"
import { useCallback, useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid"
import defaultI18n from "../../../../sv.json"
import * as FSTypes from "../../../../types"
import * as Types from "./types"

const validationName = "password"

const Password: Types.PasswordComponent = (props) => {
    const {
        blacklist,
        i18n,
        validateOnChange,
        lowerCase,
        number,
        specialChars,
        type = FSTypes.ValidationTypes.Error,
        upperCase
    } = props

    const [uuid] = useState(uuidv4())

    const { i18n: formI18n } = useContext(Contexts.FormContext)
    const {
        addValidation,
        label,
        removeValidation,
        validateOnChange: fieldContextValidateOnChange
    } = useContext(Contexts.FieldContext)

    const validation = useCallback<FSTypes.Validation.Field.Function>((value: FormDataValue, fieldName: string) => {
        if (typeof value !== "string" || String(value).length === 0) {
            return []
        }

        const messageKeys: (keyof PasswordI18n)[] = []

        if (lowerCase) {
            if (!containsLowerCase(String(value))) {
                messageKeys.push("lowerCase")
            }
        }
        if (upperCase) {
            if (!containsUpperCase(String(value))) {
                messageKeys.push("upperCase")
            }
        }
        if (number) {
            if (!containsNumber(String(value))) {
                messageKeys.push("number")
            }
        }
        if (specialChars) {
            if (!containsSpecialChars(String(value))) {
                messageKeys.push("specialChar")
            }
        }
        if (blacklist) {
            if (containsGiven(String(value), blacklist.split(""))) {
                messageKeys.push("exclude")
            }
        }

        const variables = {
            fieldName,
            blacklist: blacklist ? blacklist.split("").join(" ") : "",
            label: String(label),
            value: String(value)
        }

        return messageKeys.map((key) => {
            return {
                fieldName,
                type,
                text: sprintf(
                    (
                        i18n?.[key] ||
                        formI18n?.validations?.field?.password?.[key] ||
                        defaultI18n.validation.field.password[key]
                    ),
                    variables
                )
            }
        })
    }, [
        blacklist,
        formI18n?.validations?.field?.password,
        i18n,
        label,
        lowerCase,
        number,
        specialChars,
        type,
        upperCase
    ])

    useEffect(() => {
        addValidation(`${validationName}_${uuid}`, validation, validateOnChange || fieldContextValidateOnChange)

        return () => {
            removeValidation(`${validationName}_${uuid}`)
        }
    }, [addValidation, validateOnChange, removeValidation, uuid, validation, fieldContextValidateOnChange])

    return null
}

export default Password
