export const ScrollDirections = {
    Top: 'top' as const,
    Right: 'right' as const,
    Bottom: 'bottom' as const,
    Left: 'left' as const
}

export type ScrollDirectionsType = typeof ScrollDirections
export type ScrollDirectionType = ScrollDirectionsType[keyof ScrollDirectionsType]

export const ScrollBehaviors = {
    Auto: 'auto' as const,
    Smooth: 'smooth' as const
}

export type ScrollBehaviorsType = typeof ScrollBehaviors
export type ScrollBehaviorType = ScrollBehaviorsType[keyof ScrollBehaviorsType]

export type UseScrollProps = {
    element?: HTMLElement | null,
    behavior?: ScrollBehaviorType
}

export type ScrollPosition = {
    top?: number,
    left?: number
}

export type ScrollParams = {
    position?: ScrollPosition,
    direction?: ScrollDirectionType
}

export type UseScroll = (props?: UseScrollProps) => (params: ScrollParams) => void