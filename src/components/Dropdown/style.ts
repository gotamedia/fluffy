import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import ButtonComponent from '../Button'
import IconComponent from '../Icon'
import MenuComponent from '../Menu'

const Button = styled(ButtonComponent)`
    ${props => getComponentTheme('Dropdown', 'style.trigger', props)};
`

const Icon = styled(IconComponent).attrs((props) => {
    return {
        icon: getComponentTheme('Dropdown', 'props.icon', props)
    }
})`
    ${props => getComponentTheme('Dropdown', 'style.icon', props)};
`

const Menu = styled(MenuComponent)`
    ${props => getComponentTheme('Dropdown', 'style.root', props)};
`

export {
    Button,
    Icon,
    Menu
}