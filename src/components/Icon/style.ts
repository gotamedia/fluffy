import styled, {
    css,
    keyframes
} from 'styled-components'

import sizes from './sizes'

import type { IconProps } from './types'

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`

const Span = styled.span<{ $size?: IconProps['size'], $spin?: IconProps['spin'] }>`
    display: inline-flex;

    svg {
        ${({ $size }) => sizes[$size || 'normal']};

        ${({ $spin }) => $spin && css`
            animation-name: ${spin};
            animation-duration: 2500ms;
            animation-iteration-count: infinite;
            animation-timing-function: linear; 
        `};
    }
`

export {
    Span
}