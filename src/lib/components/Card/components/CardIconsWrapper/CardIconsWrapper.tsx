import { useCard } from '@components/Card/contexts/CardContext'

import * as Styled from './style'
import type * as Types from './types'

const CardIconsWrapper: Types.CardIconsWrapperComponent = (props) => {
    const {
        children,
        ...DOMProps
    } = props

    const {
        vertical,
        compact
    } = useCard()

    return (
        <Styled.Wrapper
            {...DOMProps}
            $vertical={vertical}
            $compact={compact}
        >
            {children}
        </Styled.Wrapper>
    )
}

export default CardIconsWrapper