import type { ThemeStyleItem } from '@root/types'

import { Icons } from '../Icon'

import type { IconType } from '../Icon'

export type DropdownThemeType = {
    style: {
        trigger: ThemeStyleItem,
        icon: ThemeStyleItem,
        root: ThemeStyleItem
    },
    props: {
        icon: ThemeStyleItem<IconType>
    }
}

const DropdownTheme: DropdownThemeType = {
    style: {
        trigger: {},
        icon: {},
        root: {}
    },
    props: {
        icon: ({ $componentState }) => {
            return $componentState?.isOpen ? Icons.ArrowUp : Icons.ArrowDown
        }
    }
}

export default DropdownTheme