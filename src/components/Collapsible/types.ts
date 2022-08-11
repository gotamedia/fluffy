import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface CollapsibleProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean
}

interface CollapsibleWrapperStyed {
    height?: number
}

type Collapsible = ForwardRefExoticComponent<CollapsibleProps & RefAttributes<HTMLDivElement>>

export type { Collapsible, CollapsibleWrapperStyed }
