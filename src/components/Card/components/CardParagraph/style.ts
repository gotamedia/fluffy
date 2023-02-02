import styled, { css } from 'styled-components'
import themeHelpers from '@utils/theme/helpers'

const Paragraph = styled.p`
    margin: 0 0 8px 0;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color: #2E2A25;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;

    &:last-of-type {
        margin-bottom: 0;
    }

    ${themeHelpers.isSmallDevice(css`
        display: -webkit-box !important;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        white-space: normal;
    `)};
`

export {
    Paragraph
}