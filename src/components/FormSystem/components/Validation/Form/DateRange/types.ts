import { DateRangeI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import * as Types from "../../../../types"

export type DateRangeProps = PropsWithChildren<{
    blockSelection?: boolean
    fieldName: string
    i18n?: DateRangeI18n
    maxExclusive?: boolean
    maxFieldName?: string
    minExclusive?: boolean
    minFieldName?: string
    type?: Types.ValidationTypes
    validateOnChange?: boolean
}>

export type DateRangeComponent = React.FC<DateRangeProps>

export type ComponentType = DateRangeComponent
