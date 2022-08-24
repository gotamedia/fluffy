import { SameValueI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import * as Types from "../../../../types"

export type SameValueProps = PropsWithChildren<{
    fieldAName: string
    fieldBName: string
    i18n?: SameValueI18n
    type?: Types.ValidationTypes
    validateOnChange?: boolean
}>

export type SameValueComponent = React.FC<SameValueProps>

export type ComponentType = SameValueComponent
