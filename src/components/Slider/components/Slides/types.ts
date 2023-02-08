import type {
    FC,
    ReactNode,
    HTMLAttributes
} from 'react'

export type SlidesProps = {
    className?: string,
    slideProps?: HTMLAttributes<HTMLDivElement>,
    children: ReactNode,
    duration?: number
}

export type StyledSliderWrapperProps = {
    autoWidth?: boolean
} & HTMLAttributes<HTMLDivElement>

export type SlidesComponent = FC<SlidesProps>