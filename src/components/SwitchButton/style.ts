import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import type { SwitchButtonProps } from './types'

const Wrapper = styled.label`
    ${props => getComponentTheme('SwitchButton', 'style.wrapper', props)};
`

const SwitchButton = styled.input<{ $size?: SwitchButtonProps['size'] }>`
    ${props => getComponentTheme('SwitchButton', 'style.root', props)};
    ${props => getComponentTheme('SwitchButton', `sizes.${props.$size || 'normal'}`, props)};
`

const Text = styled.span<{ $componentState?: Record<string, any> }>`
    ${props => getComponentTheme('SwitchButton', 'style.text', props)};
`

export {
    Wrapper,
    SwitchButton,
    Text
}