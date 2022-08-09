
export type UseAnchorProps = {
    anchor?: HTMLElement | null,
    anchored: HTMLElement | null,
    padding?: number,
    offset?: {
        x?: number,
        y?: number
    }
}

export type AnchorRect = {
    top: number,
    left: number,
    width: number,
    height: number | null
}

export type UseAnchor = (props: UseAnchorProps) => AnchorRect