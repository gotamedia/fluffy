import styled, { css } from 'styled-components'

import Icon, {
    Icons,
    IconSizes
} from '../Icon'

const SubMenuIcon = styled(Icon).attrs(() => {
    return {
        icon: Icons.ArrowRight,
        size: IconSizes.Small
    }
})<{ $targeted: boolean }>`
    position: absolute;
    right: 5px;

    ${({ $targeted }) => $targeted && css`
        color: white;
        fill: white;
    `}
`

export {
    SubMenuIcon
}