import styled from 'styled-components'

import InputComponent from '@components/Input'
import InputGroupComponent from '@components/InputGroup'
import IconComponent, {
    Icons,
    IconSizes
} from '@components/Icon'

const InputGroup = styled(InputGroupComponent)`
    
`

const Input = styled(InputComponent)`
    width: 300px;
    min-width: 300px;
`

const Icon = styled(IconComponent).attrs(() => {
    return {
        icon: Icons.Calendar,
        size: IconSizes.Small
    }
})`
    color: ${({ theme }) => theme.colors.brand};
    fill: ${({ theme }) => theme.colors.brand};
`

export {
    InputGroup,
    Input,
    Icon
}