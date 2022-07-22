import styled from 'styled-components'

import Icon, { Icons } from '../Icon'

import sizes from '../Button/sizes'
import variants from '../Button/variants'
import { baseButtonStyle } from '../Button/style'

import type { UploadButtonProps } from './types'

const Wrapper = styled.div`
    display: flex;
    position: relative;
`

const InnerWrapper = styled.label<{ $size?: UploadButtonProps['size'], $variant?: UploadButtonProps['variant'] }>`
    ${baseButtonStyle};
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