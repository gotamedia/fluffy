import type { ThemeStyleItem } from '@root/types'

export type MenuThemeType = {
    style: {
        root: ThemeStyleItem,
        container: ThemeStyleItem,
        list: ThemeStyleItem
    }
}

const MenuTheme: MenuThemeType = {
    style: {
        root: {},
        container: {
            overflow: 'auto'
        },
        list: {}
    }
}

export default MenuTheme