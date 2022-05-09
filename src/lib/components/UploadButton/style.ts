import styled, { css } from 'styled-components'

import Icon, { Icons } from '../Icon'

import * as sizes from './sizes'
import * as variants from './variants'
import type { UploadButtonProps } from './types'

const Wrapper = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
`

// TODO: Fix colors / theme
const baseUploadButtonStyle = css`
    cursor: pointer;
    display: inline-flex;
    appearance: none;
    align-items: center;
    justify-content: center;
    user-select: none;
    position: relative;
    white-space: nowrap;
    outline: transparent solid 2px;
    outline-offset: 2px;
    width: auto;
    line-height: 1.2;
    border-radius: 6px;
    font-weight: normal;
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;

    &:focus {
        box-shadow: rgb(255 255 255) 0px 0px 0px 2px inset, rgb(0 0 0 / 65%) 0px 0px 0px 2px;
    }

    &:active {
        box-shadow: rgb(0 0 0 / 25%) 0px 0px 0px 2px inset;
    }

    &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
        box-shadow: none;
    }
`

const InnerWrapper = styled.label<{ $size?: UploadButtonProps['size'], $variant?: UploadButtonProps['variant'] }>`
    ${baseUploadButtonStyle};
    ${({ $size }) => sizes[$size || 'normal']};
    ${({ $variant }) => variants[$variant || 'primary']};
`

const UploadInput = styled.input`
    display: none;
`

const UploadIcon = styled(Icon).attrs(() => {
    // TODO: Update icon once we have "Upload" icon in place
    return {
        icon: Icons.Link
    }
})`
    margin-top: auto;
    margin-bottom: auto;
    fill: currentColor;
    margin-right: 10px;
`

const Text = styled.span`

`

const Filename = styled.p`
    color: #494949;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: auto 0 auto 15px;
`

export {
    Wrapper,
    InnerWrapper,
    UploadInput,
    UploadIcon,
    Text,
    Filename
}