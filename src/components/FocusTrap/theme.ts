import type { ThemeStyleItem } from '@root/types'
import type { FocusTrapProps } from './types'

export type FocusTrapThemeType = {
    defaultProps: Partial<FocusTrapProps>,
    style: {
        root: ThemeStyleItem
    }
}

const FocusTrapTheme: FocusTrapThemeType = {
    defaultProps: {},
    style: {
        root: {}
    }
}

export default FocusTrapTheme