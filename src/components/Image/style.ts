import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

const Image = styled.img`
    ${props => getComponentTheme('Image', 'style.root', props)};
`

export {
    Image
}