import styled, { css } from 'styled-components'

import sizes from './sizes'
import variants from './variants'

import type { InputProps } from './types'

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
    border-radius: 2px;
    font-weight: normal;
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;
`

const Input = styled.input<{ $size?: InputProps['size'], $variant?: InputProps['variant'] }>`
    ${baseInputStyle};
    ${({ $size }) => sizes[$size || 'normal']};
    ${({ $variant }) => variants[$variant || 'primary']};
`

export {
    Input
}