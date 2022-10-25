import { Icons } from '../Icon'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { SubMenuProps } from './types'
import type { IconType } from '../Icon'

export type SubMenuThemeType = ComponentTheme<{
    defaultProps: Partial<SubMenuProps>,
    style: {
        trigger: ThemeStyleItem,
        icon: ThemeStyleItem,
        root: ThemeStyleItem
    },
    props: {
        icon: ThemeStyleItem<IconType> | IconType
    }
}>

const SubMenuTheme: SubMenuThemeType = {
    defaultProps: {

    },
    style: {
        trigger: {},
        icon: ({ $componentState }) => ({
            position: 'absolute',
            right: '5px',

            ...($componentState?.targeted ? {
                color: 'white',
                fill: 'white'
            } : {})
        }),
        root: {}
    },
    props: {
        icon: Icons.ChevronRight
    }
}

export default SubMenuTheme