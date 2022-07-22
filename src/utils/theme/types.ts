import type {
    DefaultTheme,
    FlattenInterpolation,
    ThemeProps
} from "styled-components"

export type HelperStyle = FlattenInterpolation<ThemeProps<DefaultTheme>>

export type HelperFunction = (style: HelperStyle) => HelperStyle

export type ThemeHelpers = {
    isSmallDevice: HelperFunction,
    isMediumDevice: HelperFunction,
    isLargeDevice: HelperFunction,
    isNotSmallDevice: HelperFunction,
    isNotMediumDevice: HelperFunction,
    isNotLargeDevice: HelperFunction,
    isRtlNested: HelperFunction,
    rtlNested: HelperFunction
}