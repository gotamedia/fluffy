import styled, { css } from 'styled-components'

import variants from './variants'
import sizes from './sizes'
import type { InputGroupProps } from './types'

const foucsStyle = css`
    &:focus {
        z-index: 1;
    }
`

type WrapperProps = {
    $size?: InputGroupProps['size'],
    $variant?: InputGroupProps['variant'],
    $elements: {
        left: string,
        right: string
    }
}

const Wrapper = styled.div<WrapperProps>`
    display: inline-flex;
    position: relative;

    ${({ $variant }) => variants[$variant || 'primary']};

    .input-group {
        &__icon {
            z-index: 1;
            position: absolute;
            top: 50%;
            transform: translate(-0, -50%);

            &.input-group {
                &--left {
                    left: 0;
                }

                &--right {
                    right: 0;
                }
            }
        }

        &__element {
            &.input-group {
                &--left {
                    border-top-right-radius: 0;
                    border-bottom-right-radius: 0;

                    ${foucsStyle};
                }

                &--right {
                    border-top-left-radius: 0;
                    border-bottom-left-radius: 0;

                    ${foucsStyle};
                }
            }
        }
    }

    ${({ $size }) => sizes[$size || 'normal']};

    input {
        ${({ $elements }) => $elements.left === 'element' && css`
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;

            ${foucsStyle};
        `}

        ${({ $elements }) => $elements.right === 'element' && css`
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;

            ${foucsStyle};
        `}
    }
`

export {
    Wrapper
}