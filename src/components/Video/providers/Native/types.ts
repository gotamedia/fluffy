import type {
    ForwardRefExoticComponent,
    RefAttributes,
    VideoHTMLAttributes
} from 'react'

export type NativeProviderProps = VideoHTMLAttributes<HTMLVideoElement>

export type NativeProviderRef = HTMLVideoElement

export type NativeProvider = ForwardRefExoticComponent<NativeProviderProps & RefAttributes<NativeProviderRef>>