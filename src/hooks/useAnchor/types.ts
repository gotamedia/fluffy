export type UseAnchorProps = {
    anchor?: HTMLElement | null,
    anchored: HTMLElement | null,
    padding?: number,
    offset?: {
        x?: number,
        y?: number
    },
    forceDirection?: boolean
}

export type AnchorRect = {
    top?: number,
    bottom?: number,
    left: number,
    width: number,
    maxHeight: number
}

export type UseAnchor = (props: UseAnchorProps) => AnchorRect