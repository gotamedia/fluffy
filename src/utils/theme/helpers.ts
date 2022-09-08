import { css } from 'styled-components'

import {
    HelperFunction,
    ThemeHelpers,
    HelperStyleCSSFunction
} from './types'

const isSmallDevice: HelperFunction = (style) => {
    if (Array.isArray(style)) {
        return css`
            body.s & {
                ${style};
            }
        `  as unknown as any
    } else {
        return {
            'body.s &': style
        }  as unknown as any
    }
}

const isMediumDevice: HelperFunction = (style) => {
    if (Array.isArray(style)) {
        return css`
            body.m & {
                ${style};
            }
        ` as unknown as any
    } else {
        return {
            'body.m &': style
        } as unknown as any
    }
}

const isLargeDevice: HelperFunction = (style) => {
    if (Array.isArray(style)) {
        return css`
            body.l & {
                ${style};
            }
        ` as unknown as any
    } else {
        return {
            'body.l & ': style
        } as unknown as any
    }
}

const isNotSmallDevice: HelperFunction = (style) => {
    if (Array.isArray(style)) {
        return css`
            body:not(.s) & {
                ${style};
            }
        ` as unknown as any
    } else {
        return {
            'body:not(.s) & ': style
        } as unknown as any
    }
}

const isNotMediumDevice: HelperFunction = (style) => {
    if (Array.isArray(style)) {
        return css`
            body:not(.m) & {
                ${style};
            }
        ` as unknown as any
    } else {
        return {
            'body:not(.m) &': style
        } as unknown as any
    }
}

const isNotLargeDevice: HelperFunction = (style) => {
    if (Array.isArray(style)) {
        return css`
            body:not(.l) & {
                ${style};
            }
        ` as unknown as any
    } else {
        return style as unknown as any
    }
}

const isRtlNested: HelperFunction = (style) => {
    if (Array.isArray(style)) {
        return css`
            .rtl & {
                ${style};
            }
        ` as unknown as any
    } else {
        return {
            'body:not(.l) &': style
        } as unknown as any
    }
}

const rtlNested = (): HelperStyleCSSFunction => {
    return isRtlNested(css`
        direction: rtl;
    `)
}

const themeHelpers: ThemeHelpers = {
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
    isNotSmallDevice,
    isNotMediumDevice,
    isNotLargeDevice,
    isRtlNested,
    rtlNested
}

export default themeHelpers
