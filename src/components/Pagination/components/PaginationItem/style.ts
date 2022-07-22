import styled from 'styled-components'

import IconButton, {
    IconButtonShapes
} from '@components/IconButton'
import { Icons } from '@components/Icon'
import Button, { ButtonVariants } from '@components/Button'

import { PaginationElementTypes } from '../../types'

const NavigationButton = styled(IconButton).attrs(({ $type }: { $type: PaginationElementTypes }) => {
    return {
        icon: $type === PaginationElementTypes.PreviousPageButton ? (
            Icons.ArrowLeft
        ) : (
            Icons.ArrowRight
        ),
        shape: IconButtonShapes.Circle
    }
})<{ $type: PaginationElementTypes }>`
    margin: auto 0;
`

const PageButton = styled(Button).attrs<{ $active?: boolean }>(({ $active, variant }) => {
    return {
        variant: $active ? variant : ButtonVariants.Text
    }
})<{ $active?: boolean }>`

`

const Separation = styled.p`
    min-width: 40px;
    display: flex;
    justify-content: center;
    margin: auto 0;
`

export {
    NavigationButton,
    PageButton,
    Separation
}