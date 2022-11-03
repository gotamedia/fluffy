import type {
    FC,
    ReactNode
} from 'react'

export type PreviewProps = {
    className?: string,
    children: ReactNode
}

export type PreviewComponent = FC<PreviewProps>