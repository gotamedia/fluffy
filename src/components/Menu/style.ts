import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import PopoverComponent from '../Popover'
import ListComponent from '../List'

const Popover = styled(PopoverComponent)`
    ${props => getComponentTheme('Menu', 'style.root', props)};
`

const List = styled(ListComponent)`
    ${props => getComponentTheme('Menu', 'style.list', props)};
`

export {
    Popover,
    List
}