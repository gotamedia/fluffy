import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

const Wrapper = styled.div`
    ${props => getComponentTheme('FocusTrap', 'style', props)?.root};
`

export {
    Wrapper
}