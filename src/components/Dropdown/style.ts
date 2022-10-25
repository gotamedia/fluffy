import styled from 'styled-components'

import IconComponent, { Icons } from '../Icon'

const Icon = styled(IconComponent).attrs(({ $isOpen } : { $isOpen: boolean }) => {
    return {
        icon: $isOpen ? Icons.ChevronUp : Icons.ChevronDown
    }
})<{ $isOpen: boolean }>`

`

export {
    Icon
}