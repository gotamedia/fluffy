import { css } from 'styled-components'

import type * as Types from './types'

const normal = css<{ $type: Types.ListItemProps['type'], $hasIcon: boolean }>`
    margin-left: 20px;

    ${({ $type, $hasIcon }) => ($type === 'select' || $hasIcon) && css`
        margin-left: 40px;
    `};
`

const full = css`
    margin-left: 0;
`

const borders = {
    normal,
    full
}

export default borders