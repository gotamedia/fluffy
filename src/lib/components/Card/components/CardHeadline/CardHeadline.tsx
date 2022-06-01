import { useCard } from '@components/Card/contexts/CardContext'

import Skeleton from '@components/Skeleton'

import * as Styled from './style'
import type * as Types from './types'
import type { SkeletonVariantType } from '@components/Skeleton/types'

const CardHeadline: Types.CardHeadlineComponent = (props) => {
    const {
        text,
        ...DOMProps
    } = props

    const {
        loading,
        variant
    } = useCard()

    return (
        <Styled.Headline {...DOMProps}>
            {
                loading ? (
                    <Skeleton
                        variant={variant as SkeletonVariantType}
                        rows={2}
                        rowHeight={37}
                    />
                ) : (
                    text
                )
            }
        </Styled.Headline>
    )
}

export default CardHeadline