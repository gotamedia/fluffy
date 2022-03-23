import {
    ImgHTMLAttributes,
    ReactNode,
    FC
} from 'react'

import {
    Headline,
    Text
} from './style'

export type PapperProps = {
    className?: string,
    image?: ImgHTMLAttributes<HTMLImageElement>,
    buttons?: ReactNode
}

export type PapperComponent = FC<PapperProps>

export type ComponentType = PapperComponent & {
    Headline: typeof Headline,
    Text: typeof Text
}