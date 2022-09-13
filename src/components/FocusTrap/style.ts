import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

const Wrapper = styled.div`
    ${props => getComponentTheme('FocusTrap', 'style.root', props)};
`

export {
    Wrapper
}