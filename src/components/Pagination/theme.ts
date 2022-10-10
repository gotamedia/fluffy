import {
    PaginationSizes,
    PaginationVariants,
    PaginationElementTypes
} from './types'

import { Icons } from '../Icon'
import { ButtonVariants } from '../Button'
import { IconButtonShapes } from '../IconButton'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { PaginationProps } from './types'
import type { IconType } from '../Icon'
import type { ButtonVariantType } from '../Button'
import type { IconButtonShapeType } from '../IconButton'

export type PaginationThemeType = ComponentTheme<{
    defaultProps: Partial<PaginationProps>
    style: {
        root: ThemeStyleItem,
        iconButton: ThemeStyleItem,
        button: ThemeStyleItem,
        separator: ThemeStyleItem
    },
    props: {
        iconButton: {
            icon: ThemeStyleItem<IconType> | IconType,
            shape: IconButtonShapeType
        }
        button: ThemeStyleItem<ButtonVariantType>
    }
}>

const PaginationTheme: PaginationThemeType = {
    defaultProps: {
        size: PaginationSizes.Normal,
        variant: PaginationVariants.Primary,
        showPreviousPageButton: true,
        showFirstPageButton: true,
        showSeparationIndicator: true,
        showLastPageButton: true,
        showNextPageButton: true
    },
    style: {
        root: {
            display: 'flex',
            gap: '7px'
        },
        iconButton: {
            margin: 'auto 0'
        },
        button: {

        },
        separator: {
            minWidth: '40px',
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto 0'
        }
    },
    props: {
        iconButton: {
            icon: ({ $componentState }) => (
                $componentState?.iconType === PaginationElementTypes.PreviousPageButton ? (
                    Icons.ArrowLeft
                ) : (
                    Icons.ArrowRight
                )
            ),
            shape: IconButtonShapes.Circle
        },
        button: ({ $componentState, variant }) => {
            return $componentState?.active ? variant : ButtonVariants.Text
        }
    }
}

export default PaginationTheme