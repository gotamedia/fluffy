import type {
    ForwardRefExoticComponent,
    RefAttributes,
    IframeHTMLAttributes
} from 'react'

export type YouTubeProviderProps = IframeHTMLAttributes<HTMLIFrameElement>

export type YouTubeProviderRef = {
    // eslint-disable-next-line no-undef
    player: YT.Player | null,
    _domRef: HTMLIFrameElement | null
}

export type YouTubeProvider = ForwardRefExoticComponent<YouTubeProviderProps & RefAttributes<YouTubeProviderRef>>