import styled from 'styled-components'

import IconComponent, { Icons } from '../Icon'

const Icon = styled(IconComponent).attrs(({ $isOpen } : { $isOpen: boolean }) => {
    return {
        icon: $isOpen ? Icons.ArrowUp : Icons.ArrowDown
    }
})<{ $isOpen: boolean }>`

`

export {
    Icon
}