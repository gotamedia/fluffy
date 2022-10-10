import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { SheetProps } from './types'

export type SheetThemeType = ComponentTheme<{
    defaultProps: Partial<SheetProps>,
    style: {
        root: ThemeStyleItem
    }
}>

const SheetTheme: SheetThemeType = {
    defaultProps: {
        duration: 300,
        direction: 'bottom',
        openOnMount: true,
        forceRender: false
    },
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