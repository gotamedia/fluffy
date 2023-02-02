import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { MenuProps } from './types'

export type MenuThemeType = ComponentTheme<{
    defaultProps: Partial<MenuProps>
    style: {
        root: ThemeStyleItem,
        list: ThemeStyleItem
    }
}>

const MenuTheme: MenuThemeType = {
    defaultProps: {
        shouldFocusOnClose: true
    },
    style: {
        root: {},
        list: ({ theme }) => ({
            overflow: 'auto',
            boxShadow: theme.boxShadows[3],
            borderRadius: '5px',
            backdropColor: 'white'
        })
    }
}

export default MenuTheme