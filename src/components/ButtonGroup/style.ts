import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import type { ButtonGroupProps } from './types'

const Wrapper = styled.div<{ $variant?: ButtonGroupProps['variant'] }>`
    ${props => getComponentTheme('ButtonGroup', 'style.root', props)};
    ${props => getComponentTheme('ButtonGroup', 'style.button', props)};
    ${props => getComponentTheme('ButtonGroup', `variants.${props.$variant || 'primary'}`, props)};
`

export {
    Wrapper
}