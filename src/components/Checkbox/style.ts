import styled, { css } from 'styled-components'

import * as sizes from './sizes'

import type { CheckboxProps } from './types'

const Wrapper = styled.label`
    display: inline-flex;
`

const baseCheckboxStyle = css`
    appearance: none;
    margin: 0;
    font: inherit;
    color: currentColor;
    border: 2px solid currentColor;
    border-radius: 4px;
    display: flex;

    &:before {
        content: "";
        margin: auto;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
        transform: scale(0);
        transform-origin: bottom left;
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em ${({ theme }) => theme.colors.brand};
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        outline: 2px solid currentColor;
        outline-offset: 1px;
    }

    &:disabled {
        color: #959495;
        cursor: not-allowed;
    }
`

const Checkbox = styled.input<{ $size?: CheckboxProps['size'] }>`
    ${baseCheckboxStyle};
    ${({ $size }) => sizes[$size || 'normal']};
`

const Text = styled.span<{ $disabled?: boolean }>`
    padding-left: 10px;
    margin: auto 0;

    ${({  $disabled }) =>  $disabled && css`
        color: #959495;
    `}
`

export {
    Wrapper,
    Checkbox,
    Text
}