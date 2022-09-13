import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import PopoverComponent from '../Popover'
import ContainerComponent from '../Container'
import ListComponent from '../List'

const Popover = styled(PopoverComponent)`
    ${props => getComponentTheme('Menu', 'style.root', props)};
`

const Container = styled(ContainerComponent)`
    ${props => getComponentTheme('Menu', 'style.container', props)};
`

const List = styled(ListComponent)`
    ${props => getComponentTheme('Menu', 'style.list', props)};
`

export {
    Popover,
    Container,
    List
}