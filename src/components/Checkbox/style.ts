import styled, { css } from 'styled-components'

import sizes from './sizes'
import variants from './variants'
import states from './states'
import checkedShapes from './checkedShapes'

import type * as Types from './types'

const Wrapper = styled.div`
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
    outline: none;
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

const Checkbox = styled.input<Types.StyledCheckboxProps>`
    ${baseCheckboxStyle};

    &:hover {
        background-color: #F5F5F5;

        &:before {
            background-color: #F5F5F5;
        }

        &:after {
            background-color: #F5F5F5;
        }
    }

    ${({ $size }) => sizes[$size || 'normal']};
    ${({ $variant, $variantType }) => variants[$variant || 'primary']($variantType)};
    ${({ $state }) => states[$state || 'default'].checkbox};

    &:checked {
        &:disabled {
            border-color: #B3B2B1;
            background-color: #DADAD8;
            
            &:before {
                background-color: #B3B2B1;
            }

            &:after {
                background-color: #B3B2B1;
            }
        }
    }

    &:disabled {
        border-color: #B3B2B1;
        background-color: #DADAD8;
        
        &:before {
            background-color: #DADAD8;
        }

        &:after {
            background-color: #DADAD8;
        }
    }
`

const Text = styled.span<{ $disabled?: boolean, $state: Types.CheckboxState }>`
    padding-left: 8px;
    margin: auto 0;

    ${({ $state }) => states[$state || 'default'].label};

    ${({ $disabled }) => $disabled && css`
        color: #B3B2B1;
    `}
`

export {
    Wrapper,
    Checkbox,
    Text
}