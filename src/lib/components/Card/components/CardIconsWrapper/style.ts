import styled, { css } from 'styled-components'
import themeHelpers from '@utils/theme/helpers'

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: auto 0 0 0;
    padding-top: 10px;
    justify-content: space-around;

    ${themeHelpers.isSmallDevice(css`
        padding-bottom: 10px;
    `)}
`

export {
    Wrapper
}