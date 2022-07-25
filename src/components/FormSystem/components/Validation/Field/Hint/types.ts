import { HintI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import * as Types from "../../../../types"

export type HintProps = PropsWithChildren<{
    type?: Types.Validation.Types
    i18n?: HintI18n
}>

export type HintComponent = React.FC<HintProps>

export type ComponentType = HintComponent
