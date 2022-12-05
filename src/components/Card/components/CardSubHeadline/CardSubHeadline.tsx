import { useCard } from '@components/Card/contexts/CardContext'

import Skeleton from '@components/Skeleton'

import * as Styled from './style'
import type * as Types from './types'

const CardSubHeadline: Types.CardSubHeadlineComponent = (props) => {
    const {
        children,
        ...DOMProps
    } = props

    const {
        loading
    } = useCard()

    return (
        <Styled.SubHeadline {...DOMProps}>
            {
                loading ? (
                    <Skeleton
                        rowHeight={13}
                    />
                ) : (
                    children
                )
            }
        </Styled.SubHeadline>
    )
}

export default CardSubHeadline