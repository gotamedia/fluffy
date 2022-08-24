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
import React, { useCallback, useContext, useEffect, useState } from "react"
import { renderToString } from "react-dom/server"
import { v4 as uuidv4 } from "uuid"
import * as FSTypes from "../../../../types"
import * as Types from "./types"
import defaultI18n from "../../../../sv.json"

const validationName = "password"

const Password: Types.PasswordComponent = (props) => {
    const {
        blacklist,
        children,
        i18n,
        validateOnChange,
        lowerCase,
        maxLength,
        minLength,
        number,
        showAllRequirements,
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

        const length = value.length
        const allMessageKeys: (keyof PasswordI18n)[] = []
        const messageKeys: (keyof PasswordI18n)[] = []

        const addMessageKey = (condition: boolean, key: keyof PasswordI18n) => {
            if (condition) {
                messageKeys.push(key)
            }
            allMessageKeys.push(key)
        }

        if (lowerCase) {
            addMessageKey(!containsLowerCase(String(value)), "lowerCase")
        }
        if (upperCase) {
            addMessageKey(!containsUpperCase(String(value)), "upperCase")
        }
        if (number) {
            addMessageKey(!containsNumber(String(value)), "number")
        }
        if (specialChars) {
            addMessageKey(!containsSpecialChars(String(value)), "specialChar")
        }
        if (blacklist) {
            addMessageKey(containsGiven(String(value), blacklist.split("")), "exclude")
        }
        if (minLength || maxLength) {
            if (minLength && maxLength) {
                if (minLength === maxLength) {
                    addMessageKey(length !== minLength, "exactlyLength")
                } else {
                    addMessageKey(length < minLength || length > maxLength, "betweenLength")
                }
            } else if (minLength) {
                addMessageKey(length < minLength, "minLength")
            } else if (maxLength) {
                addMessageKey(length > maxLength, "maxLength")
            }
        }

        if (messageKeys.length === 0) {
            return []
        }

        const variables = {
            fieldName,
            blacklist: blacklist ? blacklist.split("").join(" ") : "",
            label: String(label),
            maxLength: String(maxLength),
            minLength: String(minLength),
            value: String(value)
        }

        return [
            {
                fieldName,
                type,
                text: children !== undefined
                    ? renderToString(<>{children}</>)
                    : renderToString(
                        <>
                            {sprintf(
                                (
                                    i18n?.text ||
                                    formI18n?.validations?.field?.password?.text ||
                                    defaultI18n.validation.field.password.text
                                ),
                                variables
                            )}
                            <ul>
                                {(showAllRequirements ? allMessageKeys : messageKeys).map((key) => {
                                    const template = i18n?.[key] ||
                                        formI18n?.validations?.field?.password?.[key] ||
                                        defaultI18n.validation.field.password[key]
                                    return template
                                        ? (
                                            <li key={key}>
                                                {sprintf(
                                                    (
                                                        i18n?.[key] ||
                                                        formI18n?.validations?.field?.password?.[key] ||
                                                        defaultI18n.validation.field.password[key]
                                                    ),
                                                    variables
                                                )}
                                            </li>
                                        )
                                        : undefined
                                }).filter(Boolean)}
                            </ul>
                        </>
                    )
            }
        ]
    }, [
        blacklist,
        children,
        formI18n?.validations?.field?.password,
        i18n,
        label,
        lowerCase,
        maxLength,
        minLength,
        number,
        showAllRequirements,
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
