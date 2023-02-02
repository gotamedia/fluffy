import styled, { css } from 'styled-components'
import themeHelpers from '@utils/theme/helpers'

const Wrapper = styled.div`
    flex: 1;
    display: flex;
    padding: 20px;
    flex-direction: column;
    overflow: hidden;

    ${themeHelpers.isSmallDevice(css`
        padding: 12px;
    `)};
`

export {
    Wrapper
}