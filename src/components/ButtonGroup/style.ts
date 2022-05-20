import styled, { css } from 'styled-components'

import type { ButtonGroupProps } from './types'

const Wrapper = styled.div<{ $variant?: ButtonGroupProps['variant'] }>`
    display: inline-flex;

    button {
        &:not(:only-child) {
            &:first-child {
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
            }

            &:last-child {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
                border-left: 1px solid gray;
            }

            &:not(:first-child):not(:last-child) {
                border-radius: 0;
                border-left: 1px solid gray;
            }
        }

        ${({ $variant }) => {
            switch($variant) {
                case 'text':
                    return css`
                        button {
                            &:not(:only-child) {
                                &:first-child {
                                    padding-right: 10px;
                                }

                                &:not(:first-child):not(:last-child) {
                                    padding-left: 10px;
                                }
                            }
                        }
                    `
            }
        }}
    }
`

export {
    Wrapper
}