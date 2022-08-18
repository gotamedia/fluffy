import { PasswordI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import * as Types from "../../../../types"

export type PasswordProps = PropsWithChildren<{
    blacklist?: string
    i18n?: PasswordI18n
    instantUpdate?: boolean
    lowerCase?: boolean
    number?: boolean
    specialChars?: boolean
    type?: Types.Validation.Types
    upperCase?: boolean
}>

export type PasswordComponent = React.FC<PasswordProps>

export type ComponentType = PasswordComponent
