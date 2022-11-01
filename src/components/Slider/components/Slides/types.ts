import type {
    FC,
    ReactNode,
    HTMLAttributes
} from 'react'

export type SlidesProps = {
    children: ReactNode,
    slideProps?: HTMLAttributes<HTMLDivElement>
}

export type SlidesComponent = FC<SlidesProps>