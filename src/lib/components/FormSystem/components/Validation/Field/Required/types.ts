import { RequiredI18n } from "./i18nTypes"
import React from "react"
import * as Types from "../../../../types"

export type RequiredProps = {
    type?: Types.Validation.Types
    i18n?: RequiredI18n
}

export type RequiredComponent = React.FC<RequiredProps>

export type ComponentType = RequiredComponent
