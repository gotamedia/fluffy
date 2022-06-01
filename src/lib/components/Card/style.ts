import styled, { css } from 'styled-components'
import themeHelpers from '@utils/theme/helpers'

import * as sizes from './sizes'
import * as variants from './variants'

import type { CardProps } from './types'

const Wrapper = styled.div<{ $size: CardProps['size'], $variant: CardProps['variant']}>`
    padding: 6px;
    border-radius: 16px;
    display: flex;
    position: relative;
    overflow: hidden;
    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadows[3]};

    ${themeHelpers.isSmallDevice(css`
        flex-direction: column;
    `)}

    ${({ $size }) => sizes[$size || 'normal']};
    ${({ $variant }) => variants[$variant || 'light']};
`

export {
    Wrapper
}