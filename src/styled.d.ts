import 'styled-components'

// TODO: Fix actual better types, these ones were copied and auto generated!
interface MediaQueries {
    small: string,
    medium: string
}

interface Borders {
    radius: string[]
    teaser: Teaser
}

interface Teaser {
    package: Package
}

interface Package {
    default: Default,
    opinion: Default
}

interface Default {
    'border-left-width': string,
    'border-right-width': string
}

interface Fonts {
    generic: any[]
}

interface Colors {
    brand: string,
    grey: string[],
    border: string,
    white: string,
    highlight: Highlight,
    link: string,
    payment: string,
    socialMedia: SocialMedia,
    error: string,
    alert: Alert,
    pill: Pill
}

interface Alert {
    error: Error,
    warning: Error,
    success: Error,
    info: Error,
    loading: Error
    hint: Error
}

interface Pill {
    alert: string,
    warning: string,
    success: string,
    disabled: string,

}

interface Error {
    text: string,
    background: string,
    border: string
}

interface SocialMedia {
    facebook: string,
    twitter: string,
    linkedIn: string
}

interface Highlight {
    yellow: Yellow,
    red: Red
}

interface Red {
    primary: string
}

interface Yellow {
    primary: string,
    dark: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        space: number[],
        fontSizes: number[],
        lineHeights: string[],
        colors: Colors,
        fonts: Fonts,
        borders: Borders,
        breakpoints: string[],
        mediaQueries: MediaQueries,
        boxShadows: string[],
        filterShadows: string[]
    }
}
