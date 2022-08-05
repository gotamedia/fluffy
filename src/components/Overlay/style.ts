import styled from 'styled-components'

import variants from './variants'

import * as Types from './types'

const Wrapper = styled.div<{ $variant: Types.OverlayProps['variant'] }>`
    z-index: 900;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    ${({ $variant }) => variants[$variant || 'normal']}
`

export {
    Wrapper
}