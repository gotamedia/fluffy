import styled, { css } from 'styled-components'

import * as sizes from './sizes'
import * as variants from './variants'
import * as shapes from './shapes'

import type { IconButtonProps } from './types'

// TODO: Fix colors / theme
const baseIconButtonStyle = css`
    display: inline-flex;
    appearance: none;
    align-items: center;
    justify-content: center;
    user-select: none;
    position: relative;
    white-space: nowrap;
    outline: none;
    width: auto;
    line-height: 1.2;
    font-weight: normal;
    box-sizing: border-box;
`

type StyledIconButtonProps = {
    $size?: IconButtonProps['size'],
    $variant?: IconButtonProps['variant'],
    $shape?: IconButtonProps['shape']
}

const IconButton = styled.button<StyledIconButtonProps>`
    ${baseIconButtonStyle};
    ${({ $size }) => sizes[$size || 'normal']};
    ${({ $shape }) => shapes[$shape || 'square']};
    ${({ $variant }) => variants[$variant || 'primary']};

    .fluffy-icon {
        margin-top: auto;
        margin-bottom: auto;
        fill: currentColor;
    }
`

export {
    IconButton
}