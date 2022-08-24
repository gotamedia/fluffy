import React, { PropsWithChildren } from "react"
import { InfoI18n } from "./i18nTypes"

export type InfoProps = PropsWithChildren<{
    condition?: boolean,
    i18n?: InfoI18n
}>

export type InfoComponent = React.FC<InfoProps>

export type ComponentType = InfoComponent
