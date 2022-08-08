import styled from 'styled-components'

import backdrops from './backDrops'

import type * as Types from './types'

const Wrapper = styled.div<{ $backdrop: Types.ContainerProps['backdrop'] }>`
    ${({ $backdrop }) => backdrops[$backdrop || 'medium']};
    border-radius: 5px;
    background-color: white;
`

export {
    Wrapper
}