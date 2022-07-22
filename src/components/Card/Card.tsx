import { CardContext } from './contexts/CardContext'

import * as Styled from './style'
import type * as Types from './types'

const Card: Types.CardComponent = (props) => {
    const {
        size = 'normal',
        variant = 'light',
        loading = false,
        vertical = false,
        compact = false,
        children,
        ...DOMProps
    } = props

    const context = {
        size: size,
        variant: variant,
        loading: loading,
        vertical: vertical,
        compact: compact
    }

    return (
        <CardContext.Provider value={context}>
            <Styled.Wrapper
                {...DOMProps}
                $size={size}
                $variant={variant}
                $vertical={vertical}
                $compact={compact}
            >
                {children}
            </Styled.Wrapper>
        </CardContext.Provider>
    )
}

export default Card