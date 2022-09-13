import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import type * as Types from './types'

const Wrapper = styled.div<{ $backdrop: Types.ContainerProps['backdrop'] }>`
    ${props => getComponentTheme('Container', 'style.root', props)};
    ${props => getComponentTheme('Container', `backdrops.${props.$backdrop || 'medium'}`, props)};
`

export {
    Wrapper
}