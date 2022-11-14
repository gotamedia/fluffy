import type {
    FC,
    ReactNode
} from 'react'

export type PreviewItemProps = {
    index: number,
    active: boolean,
    children: ReactNode,
    goToIndex: (index: number) => void
}

export type PreviewItemComponent = FC<PreviewItemProps>