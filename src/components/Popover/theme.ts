import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { PopoverProps } from './types'

export type PopoverThemeType = ComponentTheme<{
    defaultProps: Partial<PopoverProps>,
    style: {
        overlay: ThemeStyleItem,
        root: ThemeStyleItem
    }
}>

const PopoverTheme: PopoverThemeType = {
    defaultProps: {

    },
    style: {
        overlay: {},
        root: {}
    }
}

export default PopoverTheme