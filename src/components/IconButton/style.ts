import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import type { IconButtonProps } from './types'


type StyledIconButtonProps = {
    $size?: IconButtonProps['size'],
    $shape?: IconButtonProps['shape'],
    $variant?: IconButtonProps['variant']
}

const IconButton = styled.button<StyledIconButtonProps>`
    ${props => getComponentTheme('IconButton', 'style.root', props)};
    ${props => getComponentTheme('IconButton', `sizes.${props.$size}`, props)};
    ${props => getComponentTheme('IconButton', `shapes.${props.$shape}`, props)};
    ${props => getComponentTheme('IconButton', `variants.${props.$variant}`, props)};

    .fluffy-icon {
        ${props => getComponentTheme('Button', 'style.icon', props)};
    }
`

export {
    IconButton
}