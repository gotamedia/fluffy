import styled from 'styled-components'

import sizes from './sizes'

import type { IconProps } from './types'

const Span = styled.span<{ $size?: IconProps['size']}>`
    display: inline-flex;

    svg {
        ${({ $size }) => sizes[$size || 'normal']};
    }
`

export {
    Span
}