import styled, { css } from 'styled-components'

import { tint } from 'polished'

import sizes from './sizes'

import type { SwitchButtonProps } from './types'

const Wrapper = styled.label`
    display: inline-flex;
`

const baseSwitchButtonStyle = css`
    appearance: none;
    outline: none;
    margin: 0px;
    border-radius: 34px;
    background-color: rgb(51, 51, 51);

    &:before {
        content: "";
        display: inline-block;
        border-radius: 50%;
        background-color: white;
        transition: transform 300ms ease 0s;
    }

    &:checked {
        background-color: ${({ theme }) => theme.colors.brand};
    }

    &:hover {
        &:not(:disabled) {
            background-color: ${tint(0.25, 'rgb(51, 51, 51)')};

            &:checked {
                background-color: ${({ theme }) => tint(0.25, theme.colors.brand)};
            }
        }
    }

    &:active {
        &:not(:disabled) {
            background-color: ${tint(0.1, 'rgb(51, 51, 51)')};

            &:checked {
                background-color: ${({ theme }) => tint(0.1, theme.colors.brand)};
            }
        }
    }

    &:focus {
        box-shadow: white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px;
    }

    &:disabled {
        color: #959495;
        background-color: #959495;
    }
`

const SwitchButton = styled.input<{ $size?: SwitchButtonProps['size'] }>`
    ${baseSwitchButtonStyle};
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
    SwitchButton,
    Text
}