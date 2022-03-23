import {
    StyledUtil,
    ThemeHelpers
} from './types'

const isSmallDevice: StyledUtil = (style) => `
    body.s & {
        ${style};
    }
`

const isMediumDevice: StyledUtil = (style) => `
    body.m & {
        ${style};
    }
`

const isLargeDevice: StyledUtil = (style) => `
    body.l & {
        ${style};
    }
`

const isNotSmallDevice: StyledUtil = (style) => `
    body:not(.s) & {
        ${style};
    }
`

const isNotMediumDevice: StyledUtil = (style) => `
    body:not(.m) & {
        ${style};
    }
`

const isNotLargeDevice: StyledUtil = (style) => `
    body:not(.l) & {
        ${style};
    }
`

const isRtlNested: StyledUtil = (style) => `
    .rtl & {
        ${style};
    }
`

const rtlNested: StyledUtil = () => isRtlNested(`
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
