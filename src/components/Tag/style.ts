import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import { Icons } from '../Icon'
import IconButton, { IconButtonVariants, IconButtonSizes } from '../IconButton'

import type * as Types from './types'

const Wrapper = styled.div<{ $size: Types.TagSizeType, $componentState?: Record<string, any> }>`
    ${props => getComponentTheme('Tag', 'style.root', props)};
    ${props => getComponentTheme('Tag', `sizes.${props.$size}`, props)};
`

const Label = styled.p`
    ${props => getComponentTheme('Tag', 'style.label', props)};
`

const Divider = styled.div`
    ${props => getComponentTheme('Tag', 'style.divider', props)};
`

const ClearIcon = styled(IconButton).attrs(() => {
    return {
        icon: Icons.Cross,
        size: IconButtonSizes.Tiny,
        variant: IconButtonVariants.Outline
    }
})`
    ${props => getComponentTheme('Tag', 'style.icon', props)};
`

export {
    Wrapper,
    Label,
    Divider,
    ClearIcon
}