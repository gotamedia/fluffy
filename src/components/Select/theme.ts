import type { ThemeStyleItem } from '@root/types'

import { Icons } from '../Icon'

import type { IconType } from '../Icon'

export type SelectThemeType = {
    style: {
        trigger: ThemeStyleItem,
        icon: ThemeStyleItem,
        root: ThemeStyleItem
    },
    props: {
        icon: ThemeStyleItem<IconType>
    }
}

const SelectTheme: SelectThemeType = {
    style: {
        trigger: {
            '> span:first-child': {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                margin: 'auto auto auto 0'
            },
        
            '.fluffy-icon': {
                margin: 'auto 0 auto auto'
            }
        },
        icon: {},
        root: {}
    },
    props: {
        icon: ({ $componentState }) => {
            return $componentState?.isOpen ? Icons.ArrowUp : Icons.ArrowDown
        }
    }
}

export default SelectTheme