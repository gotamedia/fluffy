import { LoadingI18n } from "@components/FormSystem/components/Validation/Field/Loading/i18nTypes"
import React from "react"

export type LoadingProps = {
    condition: boolean,
    i18n: LoadingI18n
}

export type LoadingComponent = React.FC<LoadingProps>

export type ComponentType = LoadingComponent
