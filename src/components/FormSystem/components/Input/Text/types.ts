import { InputProps } from "@components/Input"
import React, { PropsWithChildren } from "react"
import { DefaultTheme } from "styled-components"
import * as Types from "../../../types"

export interface StyledTextProps {
    validationType: Types.Validation.Types | undefined
    $theme: DefaultTheme

}

export type TextProps = PropsWithChildren<{
    disabled?: boolean
    readOnly?: boolean
    name: string
} & InputProps>

export type TextComponent = React.FC<TextProps>

export type ComponentType = TextComponent
