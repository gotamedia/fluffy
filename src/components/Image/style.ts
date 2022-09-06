import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

const Image = styled.img`
    ${props => getComponentTheme('Image', 'style', props)?.root};
`

export {
    Image
}