import { useCard } from '@components/Card/contexts/CardContext'

import Skeleton from '@components/Skeleton'

import * as Styled from './style'
import type * as Types from './types'
import type { SkeletonVariantType } from '@components/Skeleton/types'

const CardImage: Types.CardImageComponent = (props) => {
    const {
        style,
        className,
        ...DOMProps
    } = props

    const {
        loading,
        variant,
        vertical
    } = useCard()

    return (
        <Styled.Wrapper
            style={style}
            className={className}
            $vertical={vertical}
        >
            {
                loading ? (
                    <Skeleton variant={variant as SkeletonVariantType}/>
                ) : (
                    <Styled.Image {...DOMProps}/>
                )
            }
        </Styled.Wrapper>
    )
}

export default CardImage