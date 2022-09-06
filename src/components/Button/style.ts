import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import type { ButtonProps } from './types'

type StyledButtonType = {
    $size?: ButtonProps['size'],
    $variant?: ButtonProps['variant']
}

const Button = styled.button<StyledButtonType>`
    ${props => getComponentTheme('Button', 'style', props)?.root};
    ${props => getComponentTheme('Button', 'sizes', props)?.[props.$size || 'normal']};
    ${props => getComponentTheme('Button', 'variants', props)?.[props.$variant || 'primary']};

    .fluffy-icon {
        ${props => getComponentTheme('Button', 'style', props)?.icon};
    }
`

const ButtonTexts = styled.span`

`

export {
    Button,
    ButtonTexts
}