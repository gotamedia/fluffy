import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import type { ButtonProps } from './types'

type StyledButtonType = {
    $size?: ButtonProps['size'],
    $variant?: ButtonProps['variant']
}

const Button = styled.button<StyledButtonType>`
    ${props => getComponentTheme('Button', 'style.root', props)};
    ${props => getComponentTheme('Button', `sizes.${props.$size || 'normal'}`, props)};
    ${props => getComponentTheme('Button', `variants.${props.$variant || 'primary'}`, props)};

    .fluffy-icon {
        ${props => getComponentTheme('Button', 'style.icon', props)};
    }
`

const ButtonTexts = styled.span`

`

export {
    Button,
    ButtonTexts
}