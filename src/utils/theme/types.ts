import type {
    DefaultTheme,
    FlattenInterpolation,
    ThemeProps
} from "styled-components"

import type { ButtonThemeType } from '@components/Button/theme'
import type { UploadButtonThemeType } from '@components/UploadButton/theme'
import type { IconButtonThemeType } from '@components/IconButton/theme'
import type { ButtonGroupThemeType } from '@components/ButtonGroup/theme'
import type { IconThemeType } from '@components/Icon/theme'
import type { CheckboxThemeType } from '@components/Checkbox/theme'
import type { DatePickerThemeType } from '@components/DatePicker/theme'
import type { DropdownThemeType } from '@components/Dropdown/theme'
import type { FocusTrapThemeType } from '@components/FocusTrap/theme'
import type { ImageThemeType } from '@components/Image/theme'

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

// TODO: Fix actual better types, these ones were copied and auto generated!
interface MediaQueries {
    small: string,
    medium: string
}

interface Borders {
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
    info: Error
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

export interface FluffyTheme {
    space: number[],
    fontSizes: number[],
    lineHeights: string[],
    colors: Colors,
    fonts: Fonts,
    borders: Borders,
    breakpoints: string[],
    mediaQueries: MediaQueries,
    boxShadows: string[],
    components: {
        Button: ButtonThemeType,
        UploadButton: UploadButtonThemeType,
        IconButton: IconButtonThemeType,
        ButtonGroup: ButtonGroupThemeType,
        Icon: IconThemeType,
        Checkbox: CheckboxThemeType,
        DatePicker: DatePickerThemeType
        Dropdown: DropdownThemeType,
        FocusTrap: FocusTrapThemeType,
        Image: ImageThemeType
    }
}