import { Icons } from '../Icon'

import { DropdownSizes, DropdownVariants } from './types'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { DropdownProps } from './types'
import type { IconType } from '../Icon'

export type DropdownThemeType = ComponentTheme<{
    defaultProps: Partial<DropdownProps>,
    style: {
        trigger: ThemeStyleItem,
        icon: ThemeStyleItem,
        root: ThemeStyleItem
    },
    props: {
        icon: ThemeStyleItem<IconType> | IconType
    }
}>

const DropdownTheme: DropdownThemeType = {
    defaultProps: {
        variant: DropdownVariants.Primary,
        size: DropdownSizes.Normal
    },
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