import type { ThemeStyleItem } from '@root/types'

import { Icons } from '../Icon'
import { ButtonVariants } from '../Button'
import { IconButtonShapes } from '../IconButton'
import { PaginationElementTypes } from './types'

import type { IconType } from '../Icon'
import type { ButtonVariantType } from '../Button'
import type { IconButtonShapeType } from '../IconButton'

export type PaginationThemeType = {
    style: {
        root: ThemeStyleItem,
        iconButton: ThemeStyleItem,
        button: ThemeStyleItem,
        separator: ThemeStyleItem
    },
    props: {
        iconButton: {
            icon: ThemeStyleItem<IconType>,
            shape: IconButtonShapeType
        }
        button: ThemeStyleItem<ButtonVariantType>
    }
}

const PaginationTheme: PaginationThemeType = {
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