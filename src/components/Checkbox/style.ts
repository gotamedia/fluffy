import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import type { CheckboxProps } from './types'

const Wrapper = styled.label`
    ${props => getComponentTheme('Checkbox', 'style', props)?.root};
`

const Checkbox = styled.input<{ $size?: CheckboxProps['size'] }>`
    ${props => getComponentTheme('Checkbox', 'style', props)?.main};
    ${props => getComponentTheme('Checkbox', 'sizes', props)?.[props.$size || 'normal']};
`

const Text = styled.span<{ $componentState: Record<string, unknown> }>`
    ${props => getComponentTheme('Checkbox', 'style', props)?.text};
`

export {
    Wrapper,
    Checkbox,
    Text
}