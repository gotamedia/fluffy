import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import type { CheckboxProps } from './types'

const Wrapper = styled.label`
    ${props => getComponentTheme('Checkbox', 'style.root', props)};
`

const Checkbox = styled.input<{ $size?: CheckboxProps['size'] }>`
    ${props => getComponentTheme('Checkbox', 'style.checkbox', props)};
    ${props => getComponentTheme('Checkbox', `sizes.${props.$size || 'normal'}`, props)};
`

const Text = styled.span<{ $componentState: Record<string, any> }>`
    ${props => getComponentTheme('Checkbox', 'style.text', props)};
`

export {
    Wrapper,
    Checkbox,
    Text
}