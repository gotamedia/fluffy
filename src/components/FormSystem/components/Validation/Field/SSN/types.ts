import { SSNI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import * as Types from "../../../../types"

export type SSNProps = PropsWithChildren<{
    minAge?: number
    i18n?: SSNI18n
    skipDash?: boolean
    type?: Types.ValidationTypes
}>

export type SSNComponent = React.FC<SSNProps>

export type ComponentType = SSNComponent
