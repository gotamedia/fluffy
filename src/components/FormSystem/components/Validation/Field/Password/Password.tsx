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
        lowerCase,
        maxLength,
        minLength,
        number,
        showAllRequirements,
        specialChars,
        type = FSTypes.Validation.Types.Error,
        upperCase
    } = props

    const [uuid] = useState(uuidv4())

    const { i18n: formI18n } = useContext(Contexts.FormContext)
    const { addValidation, removeValidation, label } = useContext(Contexts.FieldContext)

    const validation = useCallback<FSTypes.Validation.Field.Function>((value: FormDataValue, fieldName: string) => {
        if (typeof value !== "string" || String(value).length === 0) {
            return []
        }

        const length = value.length
        const messageKeys: (keyof PasswordI18n)[] = []

        if (lowerCase && (showAllRequirements || !containsLowerCase(String(value)))) {
            messageKeys.push("lowerCase")
        }
        if (upperCase && (showAllRequirements || !containsUpperCase(String(value)))) {
            messageKeys.push("upperCase")
        }
        if (number && (showAllRequirements || !containsNumber(String(value)))) {
            messageKeys.push("number")
        }
        if (specialChars && (showAllRequirements || !containsSpecialChars(String(value)))) {
            messageKeys.push("specialChar")
        }
        if (blacklist && (showAllRequirements || containsGiven(String(value), blacklist.split("")))) {
            messageKeys.push("exclude")
        }
        if (minLength || maxLength) {
            if (minLength && maxLength) {
                if (minLength === maxLength) {
                    if (showAllRequirements || length !== minLength) {
                        messageKeys.push("exactlyLength")
                    }
                } else {
                    if (showAllRequirements || length < minLength || length > maxLength) {
                        messageKeys.push("betweenLength")
                    }
                }
            } else if (minLength) {
                if (showAllRequirements || length < minLength) {
                    messageKeys.push("minLength")
                }
            } else if (maxLength) {
                if (showAllRequirements || length > maxLength) {
                    messageKeys.push("maxLength")
                }
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
                                {messageKeys.map((key) => {
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
        addValidation(`${validationName}_${uuid}`, validation)

        return () => {
            removeValidation(`${validationName}_${uuid}`)
        }
    }, [addValidation, removeValidation, uuid, validation])

    return null
}

export default Password
