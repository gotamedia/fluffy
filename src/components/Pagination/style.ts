import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

const Wrapper = styled.div`
    ${props => getComponentTheme('Pagination', 'style.root', props)};
`

export {
    Wrapper
}