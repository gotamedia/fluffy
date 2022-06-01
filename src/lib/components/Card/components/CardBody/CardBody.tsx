import * as Styled from './style'
import type * as Types from './types'

const CardBody: Types.CardBodyComponent = (props) => {
    const {
        className,
        children
    } = props

    return (
        <Styled.Wrapper className={className}>
            {children}
        </Styled.Wrapper>
    )
}

export default CardBody