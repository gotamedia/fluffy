import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

const Wrapper = styled.div`
    ${props => getComponentTheme('Sheet', 'style.root', props)};
`

export {
    Wrapper
}