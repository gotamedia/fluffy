import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import Icon, { Icons } from '../Icon'
import InputComponent from '../Input'
import InputGroupComponent from '../InputGroup'
import PopoverComponent from '../Popover'

const Wrapper = styled.div<{ $componentState?: Record<string, any> }>`
    ${props => getComponentTheme('TagsInput', 'style.root', props)};
`

const ElementsWrapper = styled.div`
    ${props => getComponentTheme('TagsInput', 'style.elementsWrapper', props)};
`

const SearchIcon = styled(Icon).attrs(() => {
    return {
        icon: Icons.MagnifyingGlass
    }
})`
    ${props => getComponentTheme('TagsInput', 'style.searchIcon', props)};
`

const ArrowIcon = styled(Icon).attrs(() => {
    return {
        icon: Icons.ChevronDown
    }
})`
    ${props => getComponentTheme('TagsInput', 'style.arrowIcon', props)};
`

const Popover = styled(PopoverComponent)`
    ${props => getComponentTheme('TagsInput', 'style.popover', props)};
`

const TagsElements = styled.div`
    ${props => getComponentTheme('TagsInput', 'style.tagsElements', props)};
`

const TagsWrapper = styled.div<{ $componentState?: Record<string, any> }>`
    ${props => getComponentTheme('TagsInput', 'style.tagsWrapper', props)};
`

const InputGroup = styled(InputGroupComponent)`
    ${props => getComponentTheme('TagsInput', 'style.inputGroup', props)};
`

const Input = styled(InputComponent)`
    ${props => getComponentTheme('TagsInput', 'style.input', props)};
`

const ListWrapper = styled.div`
    ${props => getComponentTheme('TagsInput', 'style.listWrapper', props)};
`

export {
    Wrapper,
    ElementsWrapper,
    SearchIcon,
    ArrowIcon,
    TagsWrapper,
    TagsElements,
    InputGroup,
    Input,
    Popover,
    ListWrapper
}