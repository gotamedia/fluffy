import styled, { css } from 'styled-components'

import sizes from './sizes'
import variants from './variants'
import shapes from './shapes'

import type * as Types from './types'

// TODO: Fix colors / theme
const baseIconButtonStyle = css`
    display: inline-flex;
    appearance: none;
    align-items: center;
    justify-content: center;
    user-select: none;
    position: relative;
    white-space: nowrap;
    outline: none;
    width: auto;
    line-height: 1.2;
    font-weight: normal;
    box-sizing: border-box;
`

const IconButton = styled.button<Types.StyledIconButtonProps>`
    ${baseIconButtonStyle};
    ${({ $size }) => sizes[$size || 'normal']};
    ${({ $shape }) => shapes[$shape || 'square']};
    ${({ $variant, $variantType }) => variants[$variant || 'primary']($variantType)};

    .fluffy-icon {
        margin-top: auto;
        margin-bottom: auto;
        fill: currentColor;
    }
`

export {
    IconButton
}