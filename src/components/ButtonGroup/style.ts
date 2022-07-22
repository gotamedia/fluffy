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