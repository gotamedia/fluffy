import { Icons } from '../Icon'

import {
    SelectVariants,
    SelectSizes
} from './types'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { SelectProps } from './types'
import type { IconType } from '../Icon'

export type SelectThemeType = ComponentTheme<{
    defaultProps: Partial<SelectProps>,
    style: {
        trigger: ThemeStyleItem,
        icon: ThemeStyleItem,
        root: ThemeStyleItem
    },
    props: {
        icon: ThemeStyleItem<IconType> | IconType
    }
}>

const SelectTheme: SelectThemeType = {
    defaultProps: {
        variant: SelectVariants.Primary,
        size: SelectSizes.Normal,
        closeOnSelect: false,
        isMultiSelect: false
    },
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
            return $componentState?.isOpen ? Icons.ChevronUp : Icons.ChevronDown
        }
    }
}

export default SelectTheme