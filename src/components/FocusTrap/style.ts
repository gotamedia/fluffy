import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

const Wrapper = styled.div`
    ${props => getComponentTheme('FocusTrap', 'style.root', props)};
`

export {
    Wrapper
}