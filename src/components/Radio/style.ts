import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import type { RadioProps } from './types'

const Wrapper = styled.label`
    ${props => getComponentTheme('Radio', 'style.root', props)};
`

const Radio = styled.input<{ $size?: RadioProps['size'] }>`
    ${props => getComponentTheme('Radio', 'style.radio', props)};
    ${props => getComponentTheme('Radio', `sizes.${props.$size}`, props)};
`

const Text = styled.span<{ $componentState: Record<string, any> }>`
    ${props => getComponentTheme('Radio', 'style.text', props)};
`

export {
    Wrapper,
    Radio,
    Text
}