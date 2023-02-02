import * as Styled from './style'
import type * as Types from './types'

const CardBody: Types.CardBodyComponent = (props) => {
    const {
        children,
        ...DOMProps
    } = props

    return (
        <Styled.Wrapper {...DOMProps}>
            {children}
        </Styled.Wrapper>
    )
}

export default CardBody