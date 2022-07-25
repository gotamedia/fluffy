import { RequiredI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import * as Types from "../../../../types"

export type RequiredProps = PropsWithChildren<{
    i18n?: RequiredI18n
    type?: Types.Validation.Types
}>

export type RequiredComponent = React.FC<RequiredProps>

export type ComponentType = RequiredComponent
