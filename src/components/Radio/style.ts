import styled, { css } from 'styled-components'

import { tint } from 'polished'

import sizes from './sizes'

import type { RadioProps } from './types'

const Wrapper = styled.label`
    display: inline-flex;
`

const baseRadioStyle = css`
    outline: none;
    appearance: none;
    margin: 0px;
    border-radius: 50%;
    outline: none;
    box-shadow: ${({ theme }) => theme.colors.brand} 0px 0px 0px 2px inset;
    position: relative;
    display: inline-block;
    text-align: center;

    &:before {
        content: "";
        display: block;
        border-radius: 50%;
        transform: scale(0);
        transform-origin: center;
        transition: 120ms transform ease-in-out;
        background-color: ${({ theme }) => theme.colors.brand};
    }

    &:hover {
        &:not(:disabled) {
            background-color: ${({ theme }) => tint(0.90, theme.colors.brand)};
        }
    }

    &:active {
        &:not(:disabled) {
            background-color: ${({ theme }) => tint(0.82, theme.colors.brand)};
        }
    }

    &:checked::before {
        transform: scale(1);
    }

    &:focus {
        box-shadow: ${({ theme }) => theme.colors.brand} 0px 0px 0px 2px inset, white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px;
    }

    &:disabled {
        color: #959495;
        box-shadow: #959495 0px 0px 0px 2px inset;

        &:before {
            background-color: #959495;
        }
    }
`

const Radio = styled.input<{ $size?: RadioProps['size'] }>`
    ${baseRadioStyle};
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
    Radio,
    Text
}