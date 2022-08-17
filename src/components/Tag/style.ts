import styled, { css } from 'styled-components'

import { Icons } from '../Icon'
import IconButton, { IconButtonVariants, IconButtonSizes } from '../IconButton'

import sizes from './sizes'

import type * as Types from './types'

const Label = styled.p`
    font-weight: 700;
    line-height: 16px;
    color: black;
    flex: none;
    order: 0;
    flex-grow: 0;
`

const Divider = styled.div`
    width: 1px;
    height: 100%;
    background-color: black;
`

const ClearIcon = styled(IconButton).attrs(() => {
    return {
        icon: Icons.Cross,
        size: IconButtonSizes.Tiny,
        variant: IconButtonVariants.Outline,
        theme: {
            colors: {
                brand: 'black'
            }
        }
    }
})`
    border-radius: 50%;

    &:hover {
        background-color: lightcyan;
    }
`

const Wrapper = styled.div<{ $size: Types.TagSizeType, $disabled?: boolean }>`
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 16px;
    position: relative;
    border: 1px solid black;
    background-color: #ffffff;

    ${({ $size }) => sizes[$size || 'normal'].wrapper};

    ${Label} {
        ${({ $size }) => sizes[$size || 'normal'].label};
    }

    ${Divider} {
        ${({ $size }) => sizes[$size || 'normal'].divider};
    }

    ${ClearIcon} {
        ${({ $size }) => sizes[$size || 'normal'].icon};
    }

    ${({ $disabled }) => $disabled && css`
        opacity: 0.6;
    `}
`

export {
    Wrapper,
    Label,
    Divider,
    ClearIcon
}