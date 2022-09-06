import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import Icon, { Icons } from '../Icon'

import type { UploadButtonProps } from './types'

const Wrapper = styled.div`
    ${props => getComponentTheme('UploadButton', 'style.root', props)};
`

const InnerWrapper = styled.label<{ $size?: UploadButtonProps['size'], $variant?: UploadButtonProps['variant'] }>`
    ${props => getComponentTheme('UploadButton', 'style.main', props)};
    ${props => getComponentTheme('UploadButton', `sizes.${props.$size || 'normal'}`, props)};
    ${props => getComponentTheme('UploadButton', `variants.${props.$variant || 'primary'}`, props)};
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
    ${props => getComponentTheme('UploadButton', 'style.icon', props)};
    
`

const Text = styled.span`

`

const Filename = styled.p`
    ${props => getComponentTheme('UploadButton', 'style.label', props)};
`

export {
    Wrapper,
    InnerWrapper,
    UploadInput,
    UploadIcon,
    Text,
    Filename
}