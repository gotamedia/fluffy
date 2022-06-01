import styled, { css } from 'styled-components'
import themeHelpers from '@utils/theme/helpers'

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    padding: 10px 0;
    flex-direction: column;

    ${themeHelpers.isSmallDevice(css`
        padding: 0 10px;
    `)}
`

export {
    Wrapper
}