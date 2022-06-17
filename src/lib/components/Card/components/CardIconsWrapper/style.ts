import styled, { css } from 'styled-components'
import themeHelpers from '@utils/theme/helpers'

import type { CardProps } from '@components/Card/types'

const verticalStyle = css`
    padding-bottom: 10px;
`

const Wrapper = styled.div<{ $vertical: CardProps['vertical'] }>`
    display: flex;
    flex-wrap: wrap;
    margin: auto 0 0 0;
    padding-top: 10px;
    justify-content: space-around;

    ${themeHelpers.isSmallDevice(verticalStyle)};
    ${({ $vertical }) => $vertical && verticalStyle};
`

export {
    Wrapper
}