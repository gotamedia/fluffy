import { SameValueI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import * as Types from "../../../../types"

export type SameValueProps = PropsWithChildren<{
    fieldAName: string
    fieldBName: string
    type?: Types.Validation.Types
    i18n?: SameValueI18n
}>

export type SameValueComponent = React.FC<SameValueProps>

export type ComponentType = SameValueComponent
