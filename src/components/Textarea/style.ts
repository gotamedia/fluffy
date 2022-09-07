import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import type { TextareaProps } from './types'

const Textarea = styled.textarea<{ $size?: TextareaProps['size'], $variant?: TextareaProps['variant'] }>`
    ${props => getComponentTheme('Textarea', 'style.root', props)};
    ${props => getComponentTheme('Textarea', `sizes.${props.$size || 'normal'}`, props)};
    ${props => getComponentTheme('Textarea', `variants.${props.$variant || 'primary'}`, props)};
`

const Label = styled.p`
    ${props => getComponentTheme('Textarea', 'style.label', props)};
`

export {
    Textarea,
    Label
}