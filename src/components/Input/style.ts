import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import type { InputProps } from './types'

const Input = styled.input<{ $size?: InputProps['size'], $variant?: InputProps['variant'] }>`
    ${props => getComponentTheme('Input', 'style.root', props)};
    ${props => getComponentTheme('Input', `sizes.${props.$size || 'normal'}`, props)};
    ${props => getComponentTheme('Input', `variants.${props.$variant || 'primary'}`, props)};
`

const Label = styled.p`
    ${props => getComponentTheme('Input', 'style.label', props)};
`

export {
    Input,
    Label
}