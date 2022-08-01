import { SSNI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import * as Types from "../../../../types"

export type SSNProps = PropsWithChildren<{
    type?: Types.Validation.Types
    i18n?: SSNI18n
}>

export type SSNComponent = React.FC<SSNProps>

export type ComponentType = SSNComponent
