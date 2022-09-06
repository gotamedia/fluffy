import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import type { CheckboxProps } from './types'

const Wrapper = styled.label`
    ${props => getComponentTheme('Checkbox', 'style.root', props)};
`

const Checkbox = styled.input<{ $size?: CheckboxProps['size'] }>`
    ${props => getComponentTheme('Checkbox', 'style.main', props)};
    ${props => getComponentTheme('Checkbox', `sizes.${props.$size || 'normal'}`, props)};
`

const Text = styled.span<{ $componentState: Record<string, unknown> }>`
    ${props => getComponentTheme('Checkbox', 'style.text', props)};
`

export {
    Wrapper,
    Checkbox,
    Text
}