import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import type { ButtonProps } from './types'

type StyledButtonType = {
    $size?: ButtonProps['size'],
    $variant?: ButtonProps['variant']
}

const Button = styled.button<StyledButtonType>`
    ${props => getComponentTheme('Button', 'style.root', props)};
    ${props => getComponentTheme('Button', `sizes.${props.$size}`, props)};
    ${props => getComponentTheme('Button', `variants.${props.$variant}`, props)};

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