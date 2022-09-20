import type { ThemeStyleItem } from '@root/types'
import type { PopoverProps } from './types'

export type PopoverThemeType = {
    defaultProps: Partial<PopoverProps>,
    style: {
        overlay: ThemeStyleItem,
        root: ThemeStyleItem
    }
}

const PopoverTheme: PopoverThemeType = {
    defaultProps: {

    },
    style: {
        overlay: {},
        root: {}
    }
}

export default PopoverTheme