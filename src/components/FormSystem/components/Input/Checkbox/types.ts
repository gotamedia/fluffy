import React, { PropsWithChildren } from "react"

import { CheckboxProps as PlainCheckboxProps } from "@components/Checkbox"

export type CheckboxProps = PropsWithChildren<{
    disabled?: boolean
    readOnly?: boolean
    name: string
} & PlainCheckboxProps>

export type CheckboxComponent = React.FC<CheckboxProps>

export type ComponentType = CheckboxComponent
