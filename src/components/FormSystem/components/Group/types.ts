import { FlexBoxRef } from "@components/FlexBox/types"
import type { FlexBoxProps } from "@components/FlexBox/types"
import React, { RefAttributes } from "react"

export type GroupProps = FlexBoxProps

export type GroupComponent = React.FC<GroupProps & RefAttributes<FlexBoxRef>>

export type ComponentType = GroupComponent
