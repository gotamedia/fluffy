import React, { PropsWithChildren } from "react"
import { HintI18n } from "./i18nTypes"

export type HintProps = PropsWithChildren<{
    condition?: boolean,
    i18n?: HintI18n
}>

export type HintComponent = React.FC<HintProps>

export type ComponentType = HintComponent
