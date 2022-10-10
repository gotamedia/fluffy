import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { FocusTrapProps } from './types'

export type FocusTrapThemeType = ComponentTheme<{
    defaultProps: Partial<FocusTrapProps>,
    style: {
        root: ThemeStyleItem
    }
}>

const FocusTrapTheme: FocusTrapThemeType = {
    defaultProps: {},
    style: {
        root: {}
    }
}

export default FocusTrapTheme