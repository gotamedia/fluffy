import {
    StyledUtil,
    ThemeHelpers
} from './types'

// TODO: fix all returned values for all helper methods to be wrapped with css```
// from styled-components in order to be able to access theme/style other components
// inside style prop
// Currently having issue retruning css`` with Storybook app

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
