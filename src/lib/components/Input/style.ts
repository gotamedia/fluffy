import styled, { css } from 'styled-components'

import * as sizes from './sizes'
import * as variants from './variants'

import type { InputProps } from './types'

const baseInputStyle = css`
    display: inline-flex;
    appearance: none;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    outline: transparent solid 2px;
    outline-offset: 2px;
    width: auto;
    line-height: 1.2;
    border-radius: 6px;
    font-weight: normal;
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;

    &:focus {
        box-shadow: rgb(255 255 255) 0px 0px 0px 2px inset, rgb(0 0 0 / 65%) 0px 0px 0px 2px;
    }

    &:active {
        box-shadow: rgb(0 0 0 / 25%) 0px 0px 0px 2px inset;
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
        box-shadow: none;
    }
`

const Input = styled.input<{ $size?: InputProps['size'], $variant?: InputProps['variant'] }>`
    ${baseInputStyle};
    ${({ $size }) => sizes[$size || 'normal']};
    ${({ $variant }) => variants[$variant || 'primary']};
`

export {
    Input
}