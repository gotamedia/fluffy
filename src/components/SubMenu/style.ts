import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import ListItemComponent from '../ListItem'
import MenuComponent from '../Menu'

import Icon, {
    IconSizes
} from '../Icon'

const ListItem = styled(ListItemComponent)`
    ${props => getComponentTheme('SubMenu', 'style.trigger', props)};
`

const SubMenuIcon = styled(Icon).attrs((props) => {
    return {
        icon: getComponentTheme('SubMenu', 'props.icon', props),
        size: IconSizes.Small
    }
})`
    ${props => getComponentTheme('SubMenu', 'style.icon', props)};
`

const Menu = styled(MenuComponent)`
    ${props => getComponentTheme('SubMenu', 'style.root', props)};
`

export {
    SubMenuIcon,
    ListItem,
    Menu
}