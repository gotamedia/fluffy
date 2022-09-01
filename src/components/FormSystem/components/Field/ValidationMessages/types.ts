import React, { HTMLAttributes, RefAttributes } from "react"
import type * as Types from "../../../types"

export type ValidationMessagesProps = HTMLAttributes<HTMLDivElement>

export interface ValidationMessagesGroupProps {
    validationMessages: Types.Validation.Message[]
}

export type ValidationMessagesRef = HTMLDivElement

export type ValidationMessagesComponent = React.FC<ValidationMessagesProps & RefAttributes<ValidationMessagesRef>>

export type GroupComponent = React.FC<ValidationMessagesGroupProps>

export type ComponentType = ValidationMessagesComponent
