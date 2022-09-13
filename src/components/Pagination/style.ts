import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

const Wrapper = styled.div`
    ${props => getComponentTheme('Pagination', 'style.root', props)};
`

export {
    Wrapper
}