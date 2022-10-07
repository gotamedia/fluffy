import type {
    DefaultTheme,
    FlattenInterpolation,
    ThemeProps,
    CSSObject
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
import type { InputThemeType } from '@components/Input/theme'
import type { TextareaThemeType } from '@components/Textarea/theme'
import type { InputGroupThemeType } from '@components/InputGroup/theme'
import type { ListThemeType } from '@components/List/theme'
import type { ListItemThemeType } from '@components/ListItem/theme'
import type { MenuThemeType } from '@components/Menu/theme'
import type { ModalThemeType } from '@components/Modal/theme'
import type { OverlayThemeType } from '@components/Overlay/theme'
import type { PaginationThemeType } from '@components/Pagination/theme'
import type { PillThemeType } from '@components/Pill/theme'
import type { PopoverThemeType } from '@components/Popover/theme'
import type { RadioThemeType } from '@components/Radio/theme'
import type { SelectThemeType } from '@components/Select/theme'
import type { SheetThemeType } from '@components/Sheet/theme'
import type { SubMenuThemeType } from '@components/SubMenu/theme'
import type { SwitchButtonThemeType } from '@components/SwitchButton/theme'
import type { TagThemeType } from '@components/Tag/theme'
import type { TagsInputThemeType } from '@components/TagsInput/theme'
import type { TimePickerThemeType } from '@components/TimePicker/theme'
import type { ContainerThemeType } from '@components/Container/theme'

export type HelperStyleCSSFunction = FlattenInterpolation<ThemeProps<DefaultTheme>>
export type HelperStyleCSSObject = CSSObject

export type HelperFunction = (
    <Type = HelperStyleCSSFunction | HelperStyleCSSObject>
    (style: Type) => Type extends HelperStyleCSSFunction ? HelperStyleCSSFunction : HelperStyleCSSObject
)

export type ThemeHelpers = {
    isSmallDevice: HelperFunction,
    isMediumDevice: HelperFunction,
    isLargeDevice: HelperFunction,
    isNotSmallDevice: HelperFunction,
    isNotMediumDevice: HelperFunction,
    isNotLargeDevice: HelperFunction,
    isRtlNested: HelperFunction,
    rtlNested: () => HelperStyleCSSFunction
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
}

interface Alert {
    error: Error,
    warning: Error,
    success: Error,
    info: Error,
    loading: Error
    hint: Error
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
        Image: ImageThemeType,
        Input: InputThemeType,
        Textarea: TextareaThemeType,
        InputGroup: InputGroupThemeType,
        List: ListThemeType,
        ListItem: ListItemThemeType,
        Menu: MenuThemeType,
        Modal: ModalThemeType,
        Overlay: OverlayThemeType,
        Pagination: PaginationThemeType,
        Pill: PillThemeType,
        Popover: PopoverThemeType,
        Radio: RadioThemeType,
        Select: SelectThemeType,
        Sheet: SheetThemeType,
        SubMenu: SubMenuThemeType,
        SwitchButton: SwitchButtonThemeType,
        Tag: TagThemeType,
        TagsInput: TagsInputThemeType,
        TimePicker: TimePickerThemeType,
        Container: ContainerThemeType
    }
}