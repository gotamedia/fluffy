import { DateDiffI18n } from "./i18nTypes"
import React, { PropsWithChildren } from "react"
import * as Types from "../../../../types"

export enum DateDiffUnits {
    Seconds = 1,
    Minutes = 60,
    Hours = 3600,
    Days = 86400,
    Weeks = 604800,
    Years = 31536000
}

export type DateDiffProps = PropsWithChildren<{
    diffUnit?: DateDiffUnits
    fieldAName: string
    fieldBName: string
    i18n?: DateDiffI18n
    maxDiff?: number
    minDiff?: number
    type?: Types.ValidationTypes
    validateOnChange?: boolean
}>

export type DateDiffComponent = React.FC<DateDiffProps>

export type ComponentType = DateDiffComponent
