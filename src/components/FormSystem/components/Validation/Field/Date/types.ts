import { DateI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import * as Types from "../../../../types"

export type DateProps = PropsWithChildren<{
    type?: Types.Validation.Types
    i18n?: DateI18n
    max?: string | Date
    maxExclusive?: boolean
    min?: string | Date
    minExclusive?: boolean
}>

export type DateComponent = React.FC<DateProps>

export type ComponentType = DateComponent
