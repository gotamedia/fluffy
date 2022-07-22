import styled, { css } from 'styled-components'
import themeHelpers from '@utils/theme/helpers'

import sizes from './sizes'
import variants from './variants'

import type { CardProps } from './types'

const verticalStyle = css`
    flex-direction: column;
`

const Wrapper = styled.div<{
    $size: CardProps['size'],
    $variant: CardProps['variant'],
    $vertical: CardProps['vertical'],
    $compact: CardProps['compact']
}>`
    padding: 6px;
    border-radius: 16px;
    display: flex;
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadows[3]};

    ${themeHelpers.isSmallDevice(verticalStyle)};
    ${({ $vertical }) => $vertical && verticalStyle};

    ${({ $compact }) => $compact && css`
        padding: 0;
    `};

    ${({ $size }) => sizes[$size || 'normal']};
    ${({ $variant }) => variants[$variant || 'light']};
`

export {
    Wrapper
}