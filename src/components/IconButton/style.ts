import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import type { IconButtonProps } from './types'


type StyledIconButtonProps = {
    $size?: IconButtonProps['size'],
    $shape?: IconButtonProps['shape'],
    $variant?: IconButtonProps['variant']
}

const IconButton = styled.button<StyledIconButtonProps>`
    ${props => getComponentTheme('IconButton', 'style', props)?.root};
    ${props => getComponentTheme('IconButton', 'sizes', props)?.[props.$size || 'normal']};
    ${props => getComponentTheme('IconButton', 'shapes', props)?.[props.$shape || 'square']};
    ${props => getComponentTheme('IconButton', 'variants', props)?.[props.$variant || 'primary']};

    .fluffy-icon {
        ${props => getComponentTheme('Button', 'style', props)?.icon};
    }
`

export {
    IconButton
}