import { ContainerBackdrops } from './types'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { ContainerProps } from './types'

export type ContainerThemeType = ComponentTheme<{
    defaultProps: Partial<ContainerProps>,
    style: {
        root: ThemeStyleItem
    },
    backdrops: {
        light: ThemeStyleItem,
        medium: ThemeStyleItem,
        strong: ThemeStyleItem,
        none: ThemeStyleItem
    }
}>

const ContainerTheme: ContainerThemeType = {
    defaultProps: {
        backdrop: ContainerBackdrops.Medium
    },
    style: {
        root: {
            borderRadius: '5px',
            backgroundColor: 'white'
        }
    },
    backdrops: {
        light: ({ theme }) => ({
            boxShadow: theme.boxShadows[2]
        }),
        medium: ({ theme }) => ({
            boxShadow: theme.boxShadows[3]
        }),
        strong: ({ theme }) => ({
            boxShadow: theme.boxShadows[4]
        }),
        none: {}
    }
}

export default ContainerTheme