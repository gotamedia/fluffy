import styled, { css } from 'styled-components'

import sizes from './sizes'
import variants from './variants'
import states from './states'

import type * as Types from './types'

const baseInputStyle = css`
    display: inline-flex;
    appearance: none;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    outline: none;
    width: 100%;
    line-height: 1.2;
    font-weight: normal;
    padding: 11px 8px;
    box-sizing: border-box;
    border-radius: 2px;
    border-width: 1px;
    border-style: solid;
    border-color: #DADAD8;
`

const Input = styled.input<Types.StyledInputProps>`
    ${baseInputStyle};

    &:hover {
        background-color: #F5F5F5;
    }

    &:focus {
        box-shadow: white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px;
    }

    ${({ $size }) => sizes[$size || 'normal']};
    ${({ $variant, $variantType }) => variants[$variant || 'primary']($variantType)};
    ${({ $state }) => states[$state || 'default']};

    &:disabled {
        color: #B3B2B1;
        border-color: #B3B2B1;
        background-color: #DADAD8;
    }
`

const Label = styled.p`
    color: black;
    margin: 0 0 5px 0;
`

export {
    Input,
    Label
}