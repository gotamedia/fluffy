import { useCard } from '@components/Card/contexts/CardContext'

import Skeleton from '@components/Skeleton'

import * as Styled from './style'
import type * as Types from './types'
import type { SkeletonVariantType } from '@components/Skeleton/types'

const CardTitle: Types.CardTitleComponent = (props) => {
    const {
        text,
        ...DOMProps
    } = props

    const {
        loading,
        variant
    } = useCard()

    return (
        <Styled.Title {...DOMProps}>
            {
                loading ? (
                    <Skeleton variant={variant as SkeletonVariantType}/>
                ) : (
                    text
                )
            }
        </Styled.Title>
    )
}

export default CardTitle