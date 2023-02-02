import styled, { css } from 'styled-components'
import themeHelpers from '@utils/theme/helpers'

const Headline = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0 0 16px 0;

    ${themeHelpers.isSmallDevice(css`
        display: -webkit-box !important;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        white-space: normal;
    `)};
`

export {
    Headline
}