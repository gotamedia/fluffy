import styled from 'styled-components'

import FluffyList from '../List'

const List = styled(FluffyList)`
    overflow: auto;
    box-shadow: ${({ theme }) => theme.boxShadows[3]};
    border-radius: 5px;
    background-color: white;
`

export {
    List
}