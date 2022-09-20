import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import IconComponent, {
    Icons,
    IconSizes
} from '../Icon'

import type * as Types from './types'

type SharedType = {
    $componentState?: Record<string, any>
}

type InnerWrapperProps = {
    $type?: Types.ListItemProps['type']
}

const InnerWrapper = styled.div<InnerWrapperProps & SharedType>`
    ${props => getComponentTheme('ListItem', 'style.wrapper', props)};
    ${props => getComponentTheme('ListItem', `types.${props.$type}`, props)};
`

const Icon = styled(IconComponent).attrs(() => {
    return {
        size: IconSizes.Small
    }
})<{ $isTypeSelect: boolean } & SharedType>`
    ${props => getComponentTheme('ListItem', 'style.icon', props)};
`

const CheckIcon = styled(IconComponent).attrs(() => {
    return {
        icon: Icons.Checkmark,
        size: IconSizes.Small
    }
})<SharedType>`
    ${props => getComponentTheme('ListItem', 'style.checkIcon', props)};
`

const TextWrapper = styled.div`
    ${props => getComponentTheme('ListItem', 'style.textWrapper', props)};
`

const Text = styled.p<SharedType>`
    ${props => getComponentTheme('ListItem', 'style.text', props)};
`

const SubText = styled.p<SharedType>`
    ${props => getComponentTheme('ListItem', 'style.subText', props)};
`

const Border = styled.div<{ $border?: Types.ListItemProps['border'] } & SharedType>`
    ${props => getComponentTheme('ListItem', 'style.border', props)};
    ${props => getComponentTheme('ListItem', `borders.${props.$border}`, props)};
`

type WrapperProps = {
    $size?: Types.ListItemProps['size']
}

const Wrapper = styled.div<WrapperProps & SharedType>`
    ${props => getComponentTheme('ListItem', 'style.root', props)};
    ${props => getComponentTheme('ListItem', `sizes.${props.$size}`, props)};
`

export {
    Wrapper,
    InnerWrapper,
    CheckIcon,
    Icon,
    TextWrapper,
    Text,
    SubText,
    Border
}