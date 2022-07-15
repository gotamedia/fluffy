import styled, { css } from 'styled-components'

import { ButtonGroupVariants } from './types'

import type { ButtonGroupProps } from './types'

const Wrapper = styled.div<{ $variant?: ButtonGroupProps['variant'] }>`
    display: inline-flex;

    button {
        &:not(:only-child) {
            &:first-child {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }

            &:not(:first-child):not(:last-child) {
                border-radius: 0;
                border-left: 1px solid currentcolor;
            }

            &:last-child {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                border-left: 1px solid currentcolor;
            }
        }

        ${({ $variant }) => {
            switch($variant) {
                case ButtonGroupVariants.Secondary:
                    return css`
                        &:not(:first-child):not(:last-child) {
                            &:focus {
                                border-left-color: transparent;
                            }
                        }

                        &:last-child {
                            &:focus {
                                border-left-color: transparent;
                            }
                        }
                    `

                case ButtonGroupVariants.Text:
                    return css`
                        &:not(:only-child) {
                            &:first-child {
                                padding-right: 8px;
                            }

                            &:not(:first-child) {
                                &:focus {
                                    border-left-color: transparent;
                                }
                            }

                            &:not(:first-child):not(:last-child) {
                                padding-left: 8px;
                                padding-right: 8px;
                            }

                            &:last-child {
                                padding-left: 8px;
                            }
                        }
                    `
            }
        }}

        &:focus {
            z-index: 1;
        }
    }
`

export {
    Wrapper
}