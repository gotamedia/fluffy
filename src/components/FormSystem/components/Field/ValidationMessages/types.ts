import React from "react"
import * as Types from "../../../types"

export interface ValidationMessagesProps { }

export interface ValidationMessagesGroupProps {
    validationMessages: Types.Validation.Message[]
}

export type ValidationMessagesComponent = React.FC<ValidationMessagesProps>

export type GroupComponent = React.FC<ValidationMessagesGroupProps>

export type ComponentType = ValidationMessagesComponent
