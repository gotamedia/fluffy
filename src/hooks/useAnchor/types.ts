import { Align } from "@root/components/Anchor/types"

type UseAnchorProps = {
    anchor?: HTMLElement | null,
    anchored: HTMLElement | null,
    padding?: number,
    offset?: {
        x?: number,
        y?: number
    },
    forceDirection?: boolean
    withPointer?: boolean
    alignment?: Align
}

type UseAnchorPointer = {
    left?: number,
    right?: number,
    canExtendTop?: boolean,
    canExtendBottom?: boolean
}

type AnchorRect = {
    top?: number,
    bottom?: number,
    left: number,
    width: number,
    maxHeight: number,
    pointer: UseAnchorPointer
}

type UseAnchor = (props: UseAnchorProps) => AnchorRect

export type {
    UseAnchorPointer,
    UseAnchorProps,
    AnchorRect,
    UseAnchor
}
