import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import ButtonComponent from '../Button'
import IconComponent from '../Icon'
import MenuComponent from '../Menu'

const Button = styled(ButtonComponent)`
    ${props => getComponentTheme('Dropdown', 'style', props)?.trigger};
`

const Icon = styled(IconComponent).attrs((props) => {
    return {
        icon: getComponentTheme('Dropdown', 'props', props)?.icon
    }
})`
    ${props => getComponentTheme('Dropdown', 'style', props)?.icon};
`

const Menu = styled(MenuComponent)`
    ${props => getComponentTheme('Dropdown', 'style', props)?.root};
`

export {
    Button,
    Icon,
    Menu
}