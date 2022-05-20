import {
    ImgHTMLAttributes,
    ReactNode,
    FC
} from 'react'

import {
    Headline,
    Text
} from './style'

export type PaperProps = {
    className?: string,
    image?: ImgHTMLAttributes<HTMLImageElement>,
    buttons?: ReactNode
}

export type PaperComponent = FC<PaperProps>

export type ComponentType = PaperComponent & {
    Headline: typeof Headline,
    Text: typeof Text
}