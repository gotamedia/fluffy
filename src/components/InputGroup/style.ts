import styled, { css } from 'styled-components'

import sizes from './sizes'
import variants from './variants'
import states from './states'
import type * as Types from './types'

const foucsStyle = css`
    &:focus {
        z-index: 1;
    }
`

type StyledWrapperProps = Types.StyledInputGroupProps & {
    $elements: {
        left: string,
        right: string
    }
}

const Wrapper = styled.div<StyledWrapperProps>`
    display: inline-flex;
    position: relative;

    ${({ $size }) => sizes[$size || 'normal']};
    ${({ $variant, $variantType }) => variants[$variant || 'primary']($variantType)};
    ${({ $state }) => states[$state || 'default'].wrapper};

    .input-group {
        &__icon {
            pointer-events: none;
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
                ${({ $state }) => states[$state || 'default'].element};

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

    input {
        ${({ $elements }) => $elements.left === 'element' && css`
            border-left: 0;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;

            ${foucsStyle};
        `}

        ${({ $elements }) => $elements.right === 'element' && css`
            border-right: 0;
            border-top-right-radius: 0;
            border-bottom-right-radius: 0;

            ${foucsStyle};
        `}

        ${({ $state }) => states[$state || 'default'].input};
    }

    ${({ $disabled }) => $disabled && css`
        && {
            color: #8A8A8D;
        }

        .input-group {
            &__element {
                &.input-group {
                    &--left {
                        border-color: #B3B2B1;
                    }
    
                    &--right {
                        border-color: #B3B2B1;
                    }
                }
            }
        }
    `};
`

export {
    Wrapper
}