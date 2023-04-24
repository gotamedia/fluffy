import styled, { css } from 'styled-components'

import sizes from './sizes'
import variants from './variants'

import type * as Types from './types'

export const baseButtonStyle = css`
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
    border-radius: 2px;
    font-weight: normal;
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;
`

const Button = styled.button<Types.StyledCheckboxProps>`
    ${baseButtonStyle};
    ${({ $size }) => sizes[$size || 'normal']};
    ${({ $variant, $variantType }) => variants[$variant || 'primary']($variantType)};

    .fluffy-icon {
        margin-top: auto;
        margin-bottom: auto;
        fill: currentColor;

        &:first-of-type {
            margin-right: 10px;
        }

        &:last-of-type {
            margin-left: 10px;
        }

        &:only-child {
            margin-right: 0;
            margin-left: 0;
        }
    }
`

const ButtonTexts = styled.span`

`

export {
    Button,
    ButtonTexts
}