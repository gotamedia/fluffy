import type { FlexBoxProps } from "@components/FlexBox/types"
import { FlexBoxRef } from "@components/FlexBox/types"
import { ForwardRefExoticComponent, RefAttributes } from "react"

export type GroupProps = FlexBoxProps

export type GroupComponent = ForwardRefExoticComponent<GroupProps & RefAttributes<FlexBoxRef>>

export type ComponentType = GroupComponent
