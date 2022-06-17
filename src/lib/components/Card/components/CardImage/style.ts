import styled, { css } from 'styled-components'
import themeHelpers from '@utils/theme/helpers'

import type { CardProps } from '@components/Card/types'

const verticalStyle = css`
    &&& {
        width: auto;
        height: 150px;
    }
`

const Wrapper = styled.div<{ $vertical: CardProps['vertical'] }>`
    width: 200px;
    height: auto;
    margin: 10px;
    display: flex;
    overflow: hidden;
    border-radius: 16px;
    border: 2px solid white;
    box-shadow: ${({ theme }) => theme.boxShadows[0]};

    ${themeHelpers.isMediumDevice(css`
        width: 200px;
    `)};

    ${themeHelpers.isSmallDevice(verticalStyle)};
    ${({ $vertical }) => $vertical && verticalStyle};
`

const Image = styled.img`
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: cover;
`

export {
    Wrapper,
    Image
}