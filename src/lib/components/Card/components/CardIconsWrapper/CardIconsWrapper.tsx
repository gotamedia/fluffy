import * as Styled from './style'
import type * as Types from './types'

const CardIconsWrapper: Types.CardIconsWrapperComponent = (props) => {
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

export default CardIconsWrapper