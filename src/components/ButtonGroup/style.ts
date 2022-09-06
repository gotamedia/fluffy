import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import type { ButtonGroupProps } from './types'

const Wrapper = styled.div<{ $variant?: ButtonGroupProps['variant'] }>`
    ${props => getComponentTheme('ButtonGroup', 'style', props)?.root};
    ${props => getComponentTheme('ButtonGroup', 'style', props)?.button};
    ${props => getComponentTheme('ButtonGroup', 'variants', props)?.[props.$variant || 'primary']};
`

export {
    Wrapper
}