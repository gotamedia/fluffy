import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { MenuProps } from './types'

export type MenuThemeType = ComponentTheme<{
    defaultProps: Partial<MenuProps>
    style: {
        root: ThemeStyleItem,
        container: ThemeStyleItem,
        list: ThemeStyleItem
    }
}>

const MenuTheme: MenuThemeType = {
    defaultProps: {
        shouldFocusOnClose: true
    },
    style: {
        root: {},
        container: {
            overflow: 'auto'
        },
        list: {}
    }
}

export default MenuTheme