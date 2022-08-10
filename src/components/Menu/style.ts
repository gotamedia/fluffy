import styled from 'styled-components'

import IconComponent, { Icons } from '../Icon'
import PopoverComponent from '../Popover'
import ContainerComponent from '../Container'

const Wrapper = styled.div`
    
`

const Icon = styled(IconComponent).attrs(({ $isOpen } : { $isOpen: boolean }) => {
    return {
        icon: $isOpen ? Icons.ArrowUp : Icons.ArrowDown
    }
})<{ $isOpen: boolean }>`

`

const Popover = styled(PopoverComponent)`

`

const Container = styled(ContainerComponent)`
    overflow: auto;
    height: 100%;
`

export {
    Wrapper,
    Icon,
    Popover,
    Container
}