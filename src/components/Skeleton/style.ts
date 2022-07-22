import styled, { css, keyframes } from 'styled-components'
import * as variants from './variants'

import type { SkeletonProps } from './types'

const skeletonAnimation = (rtl = false) => keyframes`
    to {
        background-position-x: ${rtl ? 200 : -200}%;
    }
`

const skeletonStyle = css<{ $minHeight?: number, $rtl: boolean, $variant: SkeletonProps['variant'] }>`
    z-index: 1;
    margin: 0;
    padding: 0;
    border-radius: 5px;
    ${({ $variant }) => variants[$variant || 'light']};
    background-size: 200% 100%;
    animation: 1s ${({ $rtl }) => skeletonAnimation($rtl)} linear infinite;

    ${({ $minHeight }) => ($minHeight && $minHeight > 0) && css`
        min-height: ${$minHeight}px;
    `}
`

const Wrapper = styled.span`
    display: inline-block;
    width: 100%;
    ${skeletonStyle}
`

export {
    Wrapper
}