import { EmailI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import * as Types from "../../../../types"

export type EmailProps = PropsWithChildren<{
    type?: Types.ValidationTypes
    i18n?: EmailI18n
}>

export type EmailComponent = React.FC<EmailProps>

export type ComponentType = EmailComponent
