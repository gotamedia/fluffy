import { ValueI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import * as Types from "../../../../types"

export type ValueProps = PropsWithChildren<{
    i18n?: ValueI18n
    invertedValue?: boolean
    type?: Types.ValidationTypes
    validateOnChange?: boolean
    value: Types.FormDataValue | RegExp
}>

export type ValueComponent = React.FC<ValueProps>

export type ComponentType = ValueComponent
