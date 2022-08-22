import { DateOrderI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import * as Types from "../../../../types"

export type DateOrderProps = PropsWithChildren<{
    i18n?: DateOrderI18n
    ignoreEqualDates?: boolean
    order: string[]
    type?: Types.ValidationTypes
}>

export type DateOrderComponent = React.FC<DateOrderProps>

export type ComponentType = DateOrderComponent
