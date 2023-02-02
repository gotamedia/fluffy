import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import AnchorComponent from '@components/Anchor'

const Anchor = styled(AnchorComponent)`
    ${props => getComponentTheme('Popover', 'style.root', props)};
`

export {
    Anchor
}