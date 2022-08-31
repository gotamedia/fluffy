import type { PasswordI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import type * as Types from "../../../../types"

export type PasswordProps = PropsWithChildren<{
    blacklist?: string
    i18n?: PasswordI18n
    validateOnChange?: boolean
    lowerCase?: boolean
    number?: boolean
    specialChars?: boolean
    type?: Types.ValidationTypes
    upperCase?: boolean
}>

export type PasswordComponent = React.FC<PasswordProps>

export type ComponentType = PasswordComponent
