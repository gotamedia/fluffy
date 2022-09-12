import type { ThemeStyleItem } from '@root/types'

export type SheetThemeType = {
    style: {
        root: ThemeStyleItem
    }
}

const SheetTheme: SheetThemeType = {
    style: {
        root: {
            padding: '0',
            opacity: '0',
            outline: 'none',
            margin: '0 auto',
            position: 'absolute',
            background: '#ffffff',
            overflow: 'hidden',
            zIndex: '900'
        }
    }
}

export default SheetTheme