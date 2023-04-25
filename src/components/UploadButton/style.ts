import styled from 'styled-components'

import Icon, { Icons } from '@components/Icon'

import sizes from '@components/Button/sizes'
import variants from '@components/Button/variants'
import { baseButtonStyle } from '@components/Button/style'

import type * as Types from './types'

const Wrapper = styled.div`
    display: flex;
    position: relative;
`

const InnerWrapper = styled.label<Types.StyledUploadButtonProps>`
    ${baseButtonStyle};
    ${({ $size }) => sizes[$size || 'normal']};
    ${({ $variant, $variantType }) => variants[$variant || 'primary']($variantType)};
`

const UploadInput = styled.input`
    display: none;
`

const UploadIcon = styled(Icon).attrs(() => {
    return {
        icon: Icons.ArrowUpOnSquare
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