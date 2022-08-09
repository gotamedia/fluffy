import styled from 'styled-components'

import ButtonComponent from '../Button'
import IconComponent, { Icons } from '../Icon'
import PopoverComponent from '../Popover'
import ContainerComponent from '../Container'

const Wrapper = styled.div`
    
`

const Button = styled(ButtonComponent)`
    > span:first-child {
        overflow: hidden;
        text-overflow: ellipsis;
        margin: auto auto auto 0;
    }

    .fluffy-icon {
        margin: auto 0 auto auto;
    }
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
    Button,
    Icon,
    Popover,
    Container
}