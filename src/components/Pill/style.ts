import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import * as Types from "./types"

const Pill = styled.div<Types.PillStyledProps>`
    ${props => getComponentTheme('Pill', 'style.root', props)};
    ${props => getComponentTheme('Pill', `sizes.${props.$size}`, props)};
    ${props => getComponentTheme('Pill', `shapes.${props.$shape}`, props)};
    ${props => getComponentTheme('Pill', `variants.${props.$variant}`, props)};
`

export {
    Pill
}