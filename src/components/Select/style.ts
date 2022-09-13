import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import MenuComponent from '../Menu'

import ButtonComponent from '../Button'
import IconComponent from '../Icon'

const Button = styled(ButtonComponent)`
    ${props => getComponentTheme('Select', 'style.trigger', props)};
`

const Icon = styled(IconComponent).attrs((props) => {
    return {
        icon: getComponentTheme('Select', 'props.icon', props)
    }
})`
    ${props => getComponentTheme('Select', 'style.icon', props)};
`

const Menu = styled(MenuComponent)`
    ${props => getComponentTheme('Select', 'style.root', props)};
`

export {
    Button,
    Icon,
    Menu
}