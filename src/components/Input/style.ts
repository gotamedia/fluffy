import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import type { InputProps } from './types'

const Input = styled.input<{ $size?: InputProps['size'], $variant?: InputProps['variant'] }>`
    ${props => getComponentTheme('Input', 'style.root', props)};
    ${props => getComponentTheme('Input', `sizes.${props.$size}`, props)};
    ${props => getComponentTheme('Input', `variants.${props.$variant}`, props)};
`

const Label = styled.p`
    ${props => getComponentTheme('Input', 'style.label', props)};
`

export {
    Input,
    Label
}