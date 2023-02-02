import { useCard } from '@components/Card/contexts/CardContext'

import Skeleton from '@components/Skeleton'

import * as Styled from './style'
import type * as Types from './types'

const CardHeadline: Types.CardHeadlineComponent = (props) => {
    const {
        children,
        ...DOMProps
    } = props

    const { loading } = useCard()

    return (
        <Styled.Headline {...DOMProps}>
            {
                loading ? (
                    <Skeleton rowHeight={18} />
                ) : (
                    children
                )
            }
        </Styled.Headline>
    )
}

export default CardHeadline