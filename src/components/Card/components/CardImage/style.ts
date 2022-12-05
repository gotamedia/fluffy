import styled, { css } from 'styled-components'
import themeHelpers from '@utils/theme/helpers'

import FluffyImage from '@components/Image'

const Wrapper = styled.div`
    width: 200px;
    height: auto;
    margin: 10px;
    display: flex;
    overflow: hidden;
    border-radius: 16px;

    ${themeHelpers.isMediumDevice(css`
        width: 200px;
    `)};

    ${themeHelpers.isSmallDevice(css`
        width: auto;
        height: 150px;
    `)};
`

const Image = styled(FluffyImage)`
    width: 154px;
    height: 77px;
    aspect-ratio: 2/1;
    object-fit: contain;
`

export {
    Wrapper,
    Image
}