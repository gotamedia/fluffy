import styled, { css } from 'styled-components'

import InputComponent from '@components/Input'
import InputGroupComponent from '@components/InputGroup'
import IconComponent, {
    Icons,
    IconSizes
} from '@components/Icon'

const InputGroup = styled(InputGroupComponent)`
    
`

const Input = styled(InputComponent)`
    width: 125px;
    min-width: 125px;
`

const iconStyle = css`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.brand};
    fill: ${({ theme }) => theme.colors.brand};
`

const ClearIcon = styled(IconComponent).attrs(() => {
    return {
        icon: Icons.XMark,
        size: IconSizes.Small
    }
})`
    ${iconStyle};
`

const ClockIcon = styled(IconComponent).attrs(() => {
    return {
        icon: Icons.Clock,
        size: IconSizes.Small
    }
})`
    ${iconStyle};
`

export {
    InputGroup,
    Input,
    ClearIcon,
    ClockIcon
}