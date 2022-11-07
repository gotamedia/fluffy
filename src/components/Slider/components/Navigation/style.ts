import styled from 'styled-components'

import getComponentTheme from '@internal/utils/getComponentTheme'

import IconButton, {
    IconButtonShapes
} from '@components/IconButton'

import { Icons } from '@components/Icon'

import { SliderDirections } from '../../types'

const Wrapper = styled.div<{ $componentState: any }>`
    ${props => getComponentTheme('Slider', 'style.navigation', props)};
`

const LeftArrow = styled(IconButton).attrs(({ $componentState }: any ) => {
    return {
        icon: $componentState.direction === SliderDirections.Horizontal ? (
            Icons.ChevronLeft
        ) : (
            Icons.ChevronUp
        ),
        shape: IconButtonShapes.Circle
    }
})<{ $componentState: any }>`
    
`

const RightArrow = styled(IconButton).attrs(({ $componentState }: any ) => {
    return {
        icon: $componentState.direction === SliderDirections.Horizontal ? (
            Icons.ChevronRight
        ) : (
            Icons.ChevronDown
        ),
        shape: IconButtonShapes.Circle
    }
})<{ $componentState: any }>`
    
`

export {
    Wrapper,
    LeftArrow,
    RightArrow
}