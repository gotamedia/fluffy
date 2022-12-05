import { useCard } from '@components/Card/contexts/CardContext'

import Skeleton from '@components/Skeleton'

import * as Styled from './style'
import type * as Types from './types'

const CardImage: Types.CardImageComponent = (props) => {
    const { loading } = useCard()

    return (
        loading ? (
            <Skeleton
                style={{
                    width: props.width || '154px',
                    height: props.height || '77px'
                }}
            />
        ) : (
            <Styled.Image {...props}/>
        )
    )
}

export default CardImage