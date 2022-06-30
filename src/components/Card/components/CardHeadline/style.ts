import styled, { css } from 'styled-components'

import type { CardProps } from '@components/Card/types'

const Headline = styled.p<{ $compact: CardProps['compact'] }>`
    font-weight: 700;
    margin: 8px;
    font-size: 30px;
    white-space: pre-line;

    ${({ $compact }) => $compact && css`
        margin: 5px 8px;
    `};
`

export {
    Headline
}