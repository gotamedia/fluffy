import styled, { css } from 'styled-components'

import sizes from './sizes'
import variants from './variants'
import states from './states'

import type * as Types from './types'

const baseTextareaStyle = css`
    resize: none;
    display: inline-flex;
    appearance: none;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    outline: none;
    width: 100%;
    box-sizing: border-box;
    border-radius: 2px;
    border-width: 1px;
    border-style: solid;
    border-color: #DADAD8;
    font-weight: 400;
    line-height: 18px;
`

const Textarea = styled.textarea<Types.StyledTextareaProps>`
    ${baseTextareaStyle};

    &:hover {
        background-color: #F5F5F5;
    }

    &:focus {
        background-color: #F5F5F5;
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
    margin: 0 0 5px 0;
    color: ${({ theme }) => theme.colors.brand};
`

export {
    Textarea,
    Label
}