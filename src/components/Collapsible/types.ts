import { ForwardRefExoticComponent, HTMLAttributes, RefAttributes } from "react"

interface CollapsibleProps extends HTMLAttributes<HTMLDivElement> {
    open?: boolean
}

interface ToggleProps {
    observeElementHeight: number,
    open?: boolean
}

type CollapsibleComponent = ForwardRefExoticComponent<
    CollapsibleProps & RefAttributes<HTMLDivElement>
>

export type {
    CollapsibleComponent,
    CollapsibleProps,
    ToggleProps
}
