import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import Icon, { Icons } from '../Icon'

import type { UploadButtonProps } from './types'

const Wrapper = styled.div`
    ${props => getComponentTheme('UploadButton', 'style', props)?.root};
`

const InnerWrapper = styled.label<{ $size?: UploadButtonProps['size'], $variant?: UploadButtonProps['variant'] }>`
    ${props => getComponentTheme('UploadButton', 'style', props)?.main};
    ${props => getComponentTheme('UploadButton', 'sizes', props)?.[props.$size || 'normal']};
    ${props => getComponentTheme('UploadButton', 'variants', props)?.[props.$variant || 'primary']};
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
    ${props => getComponentTheme('UploadButton', 'style', props)?.icon};
    
`

const Text = styled.span`

`

const Filename = styled.p`
    ${props => getComponentTheme('UploadButton', 'style', props)?.label};
`

export {
    Wrapper,
    InnerWrapper,
    UploadInput,
    UploadIcon,
    Text,
    Filename
}