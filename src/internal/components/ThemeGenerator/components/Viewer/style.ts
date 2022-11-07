import styled from 'styled-components'

import List from '@components/List'
import ListItem, {
    ListItemBorders,
    ListItemTypes
} from '@components/ListItem'

const Wrapper = styled.div`
    width: 50%;
    display: flex;
`

const Sidebar = styled.div`
    overflow: scroll;
    border-right: 1px solid gray;
    min-width: 200px;
`

const ComponentsList = styled(List)`
`

const ComponentListItem = styled(ListItem).attrs(() => {
    return {
        type: ListItemTypes.Select,
        border: ListItemBorders.Full
    }
})`

`

const InnerWrapper = styled.div`
    flex: 1;
    display: flex;
    gap: 10px;
    flex-direction: column;
    padding: 20px;
    position: relative;
    overflow: auto;
`

const ComponentWrapper = styled.div`

`

const Placeholder = styled.p`
    color: gray;
    margin: auto;
    font-size: 20px;
`

export {
    Wrapper,
    Sidebar,
    ComponentsList,
    ComponentListItem,
    InnerWrapper,
    ComponentWrapper,
    Placeholder
}