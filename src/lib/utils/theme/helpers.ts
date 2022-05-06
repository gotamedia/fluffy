import { css } from 'styled-components'

import {
    HelperFunction,
    ThemeHelpers
} from './types'

const isSmallDevice: HelperFunction = (style) => css`
    body.s & {
        ${style};
    }
`

const isMediumDevice: HelperFunction = (style) => css`
    body.m & {
        ${style};
    }
`

const isLargeDevice: HelperFunction = (style) => css`
    body.l & {
        ${style};
    }
`

const isNotSmallDevice: HelperFunction = (style) => css`
    body:not(.s) & {
        ${style};
    }
`

const isNotMediumDevice: HelperFunction = (style) => css`
    body:not(.m) & {
        ${style};
    }
`

const isNotLargeDevice: HelperFunction = (style) => css`
    body:not(.l) & {
        ${style};
    }
`

const isRtlNested: HelperFunction = (style) => css`
    .rtl & {
        ${style};
    }
`

const rtlNested: HelperFunction = () => isRtlNested(css`
    direction: rtl;
`)

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
