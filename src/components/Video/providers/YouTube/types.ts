import type {
    RefObject,
    ForwardRefExoticComponent,
    RefAttributes,
    IframeHTMLAttributes
} from 'react'

export type YouTubeProps = IframeHTMLAttributes<HTMLIFrameElement>

export type YouTubeRef = {
    // eslint-disable-next-line no-undef
    player: YT.Player | null,
    _domRef: RefObject<HTMLIFrameElement>
}

export type YouTubeProvider = ForwardRefExoticComponent<YouTubeProps & RefAttributes<YouTubeRef>>