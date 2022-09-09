import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import type { RadioProps } from './types'

const Wrapper = styled.label`
    ${props => getComponentTheme('Radio', 'style.root', props)};
`

const Radio = styled.input<{ $size?: RadioProps['size'] }>`
    ${props => getComponentTheme('Radio', 'style.radio', props)};
    ${props => getComponentTheme('Radio', `sizes.${props.$size || 'normal'}`, props)};
`

const Text = styled.span<{ $componentState: Record<string, any> }>`
    ${props => getComponentTheme('Radio', 'style.text', props)};
`

export {
    Wrapper,
    Radio,
    Text
}