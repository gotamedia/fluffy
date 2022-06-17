import { useCard } from '@components/Card/contexts/CardContext'

import * as Styled from './style'
import type * as Types from './types'

const CardBody: Types.CardBodyComponent = (props) => {
    const {
        children,
        ...DOMProps
    } = props

    const { vertical } = useCard()

    return (
        <Styled.Wrapper
            {...DOMProps}
            $vertical={vertical}
        >
            {children}
        </Styled.Wrapper>
    )
}

export default CardBody