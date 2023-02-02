import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { PopoverProps } from './types'

export type PopoverThemeType = ComponentTheme<{
    defaultProps: Partial<PopoverProps>,
    style: {
        root: ThemeStyleItem
    }
}>

const PopoverTheme: PopoverThemeType = {
    defaultProps: {

    },
    style: {
        root: {}
    }
}

export default PopoverTheme