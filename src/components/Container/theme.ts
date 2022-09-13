import type { ThemeStyleItem } from '@root/types'
import type { ContainerProps } from './types'

export type ContainerThemeType = {
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
}

const ContainerTheme: ContainerThemeType = {
    defaultProps: {},
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