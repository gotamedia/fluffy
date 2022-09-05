import type { EmailI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import type * as Types from "../../../../types"

export type EmailProps = PropsWithChildren<{
    type?: Types.ValidationTypes
    i18n?: EmailI18n
    validateOnChange?: boolean
}>

export type EmailComponent = React.FC<EmailProps>

export type ComponentType = EmailComponent
