import type { ThemeStyleItem } from '@root/types'

export type PopoverThemeType = {
    style: {
        overlay: ThemeStyleItem,
        root: ThemeStyleItem
    }
}

const PopoverTheme: PopoverThemeType = {
    style: {
        overlay: {},
        root: {}
    }
}

export default PopoverTheme