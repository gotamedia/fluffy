import styled from 'styled-components'

import ButtonComponent from '../Button'
import IconComponent, { Icons } from '../Icon'

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
        icon: $isOpen ? Icons.ChevronUp : Icons.ChevronDown
    }
})<{ $isOpen: boolean }>`

`

export {
    Button,
    Icon
}