import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface CollapsibleProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean
}

type Collapsible = ForwardRefExoticComponent<CollapsibleProps & RefAttributes<HTMLDivElement>>

export type { Collapsible }
