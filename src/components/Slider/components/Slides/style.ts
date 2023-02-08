import styled from 'styled-components'
import { StyledSliderWrapperProps } from './types'

const SlideWrapper = styled.div<StyledSliderWrapperProps>`
    margin: auto;
    width: ${({ autoWidth }) => autoWidth ? "auto" : "100%"}; 
    height: 100%;
    display: flex;
`

export {
    SlideWrapper
}