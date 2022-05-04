import { CSSProperties, FlattenSimpleInterpolation } from "styled-components"

export type Theme = {
    space?: [number, number, number, number, number, number, number, number, number, number, number, number, number],
    fontSizes?: [number, number, number, number, number, number, number, number, number, number, number, number, number, number, number],
    lineHeights?: [string, string, string, string, string, string, string, string, string, string, string, string, string, string, string],
    colors?: {
        grey?: [string, string, string, string, string, string, string],
        border?: string,
        white?: string,
        primary?: string,
        dark?: string,
        light?: string,
        highlight?: {
            yellow?: {
                primary?: string,
                dark?: string,
            },
            red?: {
                primary?: string,
            },
        },
        link?: string,
        payment?: string,
        socialMedia?: {
            facebook?: string,
            twitter?: string,
            linkedIn?: string,
        },
        error?: string,
        alert?: {
            error?: {
                text?: string,
                background?: string,
                border?: string,
            },
            info?: {
                text?: string,
                background?: string,
                border?: string,
            },
        },
        citygate?: {
            lokus?: { blue?: string, }
            family?: { red?: string, }
            guided?: { green?: string, }
            memorial?: { purple?: string, }
        }
    },
    breakpoints?: [string, string],
    mediaQueries?: {
        small?: string,
        medium?: string,
    },
    teaser?: {
        fonts?: {

        },
        decoration?: {

        },
        borders?: {

        }
    },
    fonts?: {
        generic?: string[],
        editorial?: {
            headline?: {
                default?: Record<string, unknown>,
                opinion?: Record<string, unknown>,
            },
            author?: {
                default?: Record<string, unknown>,
                opinion?: Record<string, unknown>,
            },
            vignette?: {
                default?: Record<string, unknown>,
                opinion?: Record<string, unknown>,
            },
            leadin?: {
                default?: Record<string, unknown>,
                opinion?: Record<string, unknown>,
            },
            dateline?: {
                default?: Record<string, unknown>,
                opinion?: Record<string, unknown>,
            },
            text?: {
                default?: Record<string, unknown>,
                opinion?: Record<string, unknown>,
            },
            packageVignette?: Record<string, unknown>,
            chronicles?: Record<string, unknown>,
        },
    },
    decoration?: {
        teaser?: {
            icon?: string,
            iconStyle?: CSSProperties,
            text?: string,
            textStyle?: Record<string, unknown>,
        },
    },
    borders?: {
        teaser?: {
            package?: {
                default?: Record<string, unknown>,
                opinion?: Record<string, unknown>,
            },
            above?: Record<string, unknown>,
        },
    },
    boxShadows: [string, string, string, string, string],
    helpers: ThemeHelpers
}

export type StyledUtil = (style: string | FlattenSimpleInterpolation) => FlattenSimpleInterpolation

export type ThemeHelpers = {
    isSmallDevice: StyledUtil,
    isMediumDevice: StyledUtil,
    isLargeDevice: StyledUtil,
    isNotSmallDevice: StyledUtil,
    isNotMediumDevice: StyledUtil,
    isNotLargeDevice: StyledUtil,
    isRtlNested: StyledUtil,
    rtlNested: StyledUtil
}