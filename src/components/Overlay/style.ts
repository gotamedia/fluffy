import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import * as Types from './types'

const Wrapper = styled.div<{ $variant: Types.OverlayProps['variant'] }>`
    ${props => getComponentTheme('Overlay', 'style.root', props)};
    ${props => getComponentTheme('Overlay', `variants.${props.$variant}`, props)};
`

export {
    Wrapper
}