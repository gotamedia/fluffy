import styled, { css } from 'styled-components'

import sizes from './sizes'
import variants from './variants'
import variantTypes from './variantTypes'
import checkedShapes from './checkedShapes'

import type { CheckboxProps } from './types'
import type { Prefix } from '@root/types/prefix'

const Wrapper = styled.label`
    display: inline-flex;
`

const baseCheckboxStyle = css`
    appearance: none;
    margin: 0;
    font: inherit;
    border: 2px solid;
    border-color: #DADAD8;
    border-radius: 4px;
    display: flex;
    position: relative;
    background-color: white;

    &:before {
        content: "";
        border-radius: 1px;
        position: absolute;
        background-color: white;
    }

    &:after {
        content: "";
        border-radius: 1px;
        position: absolute;
        background-color: white;
    }

    &[data-indeterminate="false"] {
        &:before {
            ${checkedShapes.checkmark.before};
        }

        &:after {
            ${checkedShapes.checkmark.after};
        }
    }

    &[data-indeterminate="true"] {
        &:before {
            ${checkedShapes.indeterminate.before};
        }

        &:after {
            ${checkedShapes.indeterminate.after};
        }
    }

    &:focus {
        box-shadow: white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px;
    }
`

const Checkbox = styled.input<Prefix<Pick<CheckboxProps, 'size' | 'variant' | 'variantType'>, '$'>>`
    ${baseCheckboxStyle};

    ${({ $size }) => sizes[$size || 'normal']};
    ${({ $variant }) => variants[$variant || 'primary']};
    ${({ $variantType }) => variantTypes[$variantType || 'default']};

    &:disabled {
        color: #B3B2B1;
        border-color: #B3B2B1;
        background-color: #DADAD8;
        
        &:before {
            background-color: #B3B2B1;
        }

        &:after {
            background-color: #B3B2B1;
        }
    }
`

const Text = styled.span<{ $disabled?: boolean }>`
    padding-left: 8px;
    margin: auto 0;

    ${({  $disabled }) =>  $disabled && css`
        color: #B3B2B1;
    `}
`

export {
    Wrapper,
    Checkbox,
    Text
}