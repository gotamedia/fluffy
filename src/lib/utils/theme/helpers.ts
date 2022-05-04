import { css } from 'styled-components'

import {
    StyledUtil,
    ThemeHelpers
} from './types'

const isSmallDevice: StyledUtil = (style) => css`
    body.s & {
        ${style};
    }
`

const isMediumDevice: StyledUtil = (style) => css`
    body.m & {
        ${style};
    }
`

const isLargeDevice: StyledUtil = (style) => css`
    body.l & {
        ${style};
    }
`

const isNotSmallDevice: StyledUtil = (style) => css`
    body:not(.s) & {
        ${style};
    }
`

const isNotMediumDevice: StyledUtil = (style) => css`
    body:not(.m) & {
        ${style};
    }
`

const isNotLargeDevice: StyledUtil = (style) => css`
    body:not(.l) & {
        ${style};
    }
`

const isRtlNested: StyledUtil = (style) => css`
    .rtl & {
        ${style};
    }
`

const rtlNested: StyledUtil = () => isRtlNested(css`
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
