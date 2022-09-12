import type { ThemeStyleItem } from '@root/types'

import { Icons } from '../Icon'

import type { IconType } from '../Icon'

export type SubMenuThemeType = {
    style: {
        trigger: ThemeStyleItem,
        icon: ThemeStyleItem,
        root: ThemeStyleItem
    },
    props: {
        icon: ThemeStyleItem<IconType> | IconType
    }
}

const SubMenuTheme: SubMenuThemeType = {
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
        icon: Icons.ArrowRight
    }
}

export default SubMenuTheme