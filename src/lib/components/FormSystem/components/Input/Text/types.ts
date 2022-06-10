import React from "react"
import { DefaultTheme } from "styled-components"
import * as Types from "../../../types"

export interface StyledTextProps {
    validationType: Types.Validation.Types | undefined
    $theme: DefaultTheme

}

export interface TextProps {
    disabled?: boolean
    readOnly?: boolean
    name: string
}

export type TextComponent = React.FC<TextProps>

export type ComponentType = TextComponent
