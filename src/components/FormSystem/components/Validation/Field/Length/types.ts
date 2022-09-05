import type { LengthI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import type * as Types from "../../../../types"

export type LengthProps = PropsWithChildren<{
    exactly?: number
    i18n?: LengthI18n
    min?: number
    max?: number
    type?: Types.ValidationTypes
    validateOnChange?: boolean
}>

export type LengthComponent = React.FC<LengthProps>

export type ComponentType = LengthComponent
