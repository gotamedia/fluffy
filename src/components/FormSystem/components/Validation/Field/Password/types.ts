import { PasswordI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import * as Types from "../../../../types"

export type PasswordProps = PropsWithChildren<{
    blacklist?: string
    i18n?: PasswordI18n
    validateOnChange?: boolean
    lowerCase?: boolean
    maxLength?: number
    minLength?: number
    number?: boolean
    showAllRequirements?: boolean
    specialChars?: boolean
    type?: Types.ValidationTypes
    upperCase?: boolean
}>

export type PasswordComponent = React.FC<PasswordProps>

export type ComponentType = PasswordComponent
