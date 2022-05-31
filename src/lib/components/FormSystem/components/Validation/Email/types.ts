import { EmailI18n } from "./i18nTypes"
import React from "react"
import * as Types from "../../../types"

export type EmailProps = {
    type?: Types.Validation.Types
    i18n?: EmailI18n
}

export type EmailComponent = React.FC<EmailProps>

export type ComponentType = EmailComponent
