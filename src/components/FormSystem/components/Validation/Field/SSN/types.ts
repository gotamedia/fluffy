import { SSNI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import * as Types from "../../../../types"

export type SSNProps = PropsWithChildren<{
    i18n?: SSNI18n
    maxAge?: number
    minAge?: number
    skipDash?: boolean
    type?: Types.ValidationTypes
    validateOnChange?: boolean
}>

export type SSNComponent = React.FC<SSNProps>

export type ComponentType = SSNComponent
