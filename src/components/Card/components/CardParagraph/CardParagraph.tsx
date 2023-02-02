import { useCard } from '@components/Card/contexts/CardContext'

import Skeleton from '@components/Skeleton'

import * as Styled from './style'
import type * as Types from './types'

const CardParagraph: Types.CardParagraphComponent = (props) => {
    const {
        children,
        ...DOMProps
    } = props

    const {
        loading
    } = useCard()

    return (
        <Styled.Paragraph {...DOMProps}>
            {
                loading ? (
                    <Skeleton
                        rowHeight={14}
                    />
                ) : (
                    children
                )
            }
        </Styled.Paragraph>
    )
}

export default CardParagraph