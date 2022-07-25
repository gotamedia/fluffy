import styled, { css } from 'styled-components'
import themeHelpers from '@utils/theme/helpers'

import type { CardProps } from '@components/Card/types'

const verticalStyle = css`
    padding: 0 10px;
`

const Wrapper = styled.div<{ $vertical: CardProps['vertical'], $compact: CardProps['compact'] }>`
    flex: 1;
    display: flex;
    padding: 10px 0;
    flex-direction: column;

    ${themeHelpers.isSmallDevice(verticalStyle)};
    ${({ $vertical }) => $vertical && verticalStyle};
    
    ${({ $compact }) => $compact && css`
        padding: 0 5px;
    `};
`

export {
    Wrapper
}