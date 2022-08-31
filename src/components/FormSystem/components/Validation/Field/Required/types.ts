import type { RequiredI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import type * as Types from "../../../../types"

export type RequiredProps = PropsWithChildren<{
    i18n?: RequiredI18n
    type?: Types.ValidationTypes
    validateOnChange?: boolean
}>

export type RequiredComponent = React.FC<RequiredProps>

export type ComponentType = RequiredComponent
