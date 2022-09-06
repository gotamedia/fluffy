import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import type { IconProps } from './types'

const Span = styled.span<{ $size?: IconProps['size']}>`
    ${props => getComponentTheme('Icon', 'style.root', props)};

    svg {
        ${props => getComponentTheme('Icon', `sizes.${props.$size || 'normal'}`, props)};
    }
`

export {
    Span
}