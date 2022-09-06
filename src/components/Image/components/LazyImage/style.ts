import styled from 'styled-components'

import getComponentTheme from '@root/internal/getComponentTheme'

type StyledType = {
    $componentState: Record<string, unknown>
}

const Wrapper = styled.div`
    ${props => getComponentTheme('Image', 'style.lazy.root', props)};
`

const Image = styled.img<StyledType>`
    ${props => getComponentTheme('Image', 'style.lazy.image', props)};
`


const Thumbnail = styled.img<StyledType>`
    ${props => getComponentTheme('Image', 'style.lazy.thumbnail', props)};
`

const Placeholder = styled.div<StyledType>`
    ${props => getComponentTheme('Image', 'style.lazy.placeholder', props)};
`

export {
    Wrapper,
    Image,
    Thumbnail,
    Placeholder
}