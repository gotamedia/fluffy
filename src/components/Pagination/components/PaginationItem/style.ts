import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

import IconButton from '@components/IconButton'
import Button from '@components/Button'

const NavigationButton = styled(IconButton).attrs((props) => {
    return {
        icon: getComponentTheme('Pagination', 'props.iconButton.icon', props),
        shape: getComponentTheme('Pagination', 'props.iconButton.shape', props)
    }
})`
    ${props => getComponentTheme('Pagination', 'style.iconButton', props)};
`

const PageButton = styled(Button).attrs((props) => {
    return {
        variant: getComponentTheme('Pagination', 'props.button', props)
    }
})`
    ${props => getComponentTheme('Pagination', 'style.button', props)};
`

const Separation = styled.p`
    ${props => getComponentTheme('Pagination', 'style.separator', props)};
`

export {
    NavigationButton,
    PageButton,
    Separation
}