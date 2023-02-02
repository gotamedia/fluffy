import { CardContext } from './contexts/CardContext'

import * as Styled from './style'
import type * as Types from './types'

const Card: Types.CardComponent = (props) => {
    const {
        loading = false,
        children,
        ...DOMProps
    } = props

    const context = {
        loading: loading
    }

    return (
        <CardContext.Provider value={context}>
            <Styled.Wrapper {...DOMProps}>
                {children}
            </Styled.Wrapper>
        </CardContext.Provider>
    )
}

export default Card