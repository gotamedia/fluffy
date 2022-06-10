import React from "react"
import { DefaultTheme } from "styled-components"
import * as Types from "../../../types"

export interface ValidationMessagesProps { }

export interface StyledValidationMessageProps {
    $type: Types.Validation.Types
    $theme: DefaultTheme
}

export interface ValidationMessageProps extends StyledValidationMessageProps {
    text?: string
}

export type ValidationMessagesComponent = React.FC<ValidationMessagesProps>

export type ValidationMessageComponent = React.FC<ValidationMessageProps>

export type ComponentType = ValidationMessagesComponent
