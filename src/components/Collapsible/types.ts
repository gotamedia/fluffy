import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface CollapsibleProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean
}

type CollapsibleComponent = ForwardRefExoticComponent<
    CollapsibleProps & RefAttributes<HTMLDivElement>
>

export type { CollapsibleComponent, CollapsibleProps }
