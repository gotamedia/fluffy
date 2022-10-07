import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import type { TextareaProps } from './types'

const Textarea = styled.textarea<{ $size?: TextareaProps['size'], $variant?: TextareaProps['variant'] }>`
    ${props => getComponentTheme('Textarea', 'style.root', props)};
    ${props => getComponentTheme('Textarea', `sizes.${props.$size}`, props)};
    ${props => getComponentTheme('Textarea', `variants.${props.$variant}`, props)};
`

const Label = styled.p`
    ${props => getComponentTheme('Textarea', 'style.label', props)};
`

export {
    Textarea,
    Label
}