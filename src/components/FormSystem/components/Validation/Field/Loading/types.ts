import type { LoadingI18n } from "@components/FormSystem/components/Validation/Field/Loading/i18nTypes"
import React, { PropsWithChildren } from "react"

export type LoadingProps = PropsWithChildren<{
    condition?: boolean,
    i18n: LoadingI18n
}>

export type LoadingComponent = React.FC<LoadingProps>

export type ComponentType = LoadingComponent
