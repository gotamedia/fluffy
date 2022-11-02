import type {
    FC,
    ReactNode,
    HTMLAttributes
} from 'react'

export type SlidesProps = {
    className?: string,
    slideProps?: HTMLAttributes<HTMLDivElement>,
    children: ReactNode,
}

export type SlidesComponent = FC<SlidesProps>