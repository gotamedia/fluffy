import styled, { css } from 'styled-components'

import sizes from './sizes'
import variants from './variants'

import type { TextareaProps } from './types'

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
    line-height: 1.2;
    border-radius: 6px;
    font-weight: normal;
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;
`

const Textarea = styled.textarea<{ $size?: TextareaProps['size'], $variant?: TextareaProps['variant'] }>`
    ${baseTextareaStyle};
    ${({ $size }) => sizes[$size || 'normal']};
    ${({ $variant }) => variants[$variant || 'primary']};
`

export {
    Textarea
}