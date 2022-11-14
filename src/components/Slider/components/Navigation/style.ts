import styled, { css } from 'styled-components'

import IconButton, {
    IconButtonShapes
} from '@components/IconButton'

import { Icons } from '@components/Icon'

import { SliderDirections } from '../../types'

import type { SliderDirectionType } from '../../types'

const Wrapper = styled.div`
    
`

const LeftArrow = styled(IconButton).attrs(({ $direction }: any ) => {
    return {
        icon: $direction === SliderDirections.Horizontal ? (
            Icons.ChevronLeft
        ) : (
            Icons.ChevronUp
        ),
        shape: IconButtonShapes.Circle
    }
})<{ $direction: SliderDirectionType }>`
    position: absolute;

    ${({ $direction }) => {
        if ($direction === SliderDirections.Horizontal) {
            return css`
                top: 50%;
                left: 10px;
                transform: translate(-0, -50%);
            `
        } else {
            return css`
                top: 50%;
                right: 10px;
                transform: translate(-0, calc(-50% - 30px));
            `
        }
    }}
`

const RightArrow = styled(IconButton).attrs(({ $direction }: any ) => {
    return {
        icon: $direction === SliderDirections.Horizontal ? (
            Icons.ChevronRight
        ) : (
            Icons.ChevronDown
        ),
        shape: IconButtonShapes.Circle
    }
})<{ $direction: SliderDirectionType }>`
    position: absolute;
    
    ${({ $direction }) => {
        if ($direction === SliderDirections.Horizontal) {
            return css`
                top: 50%;
                right: 10px;
                transform: translate(-0, -50%);
            `
        } else {
            return css`
                top: 50%;
                right: 10px;
                transform: translate(-0, calc(-50% + 30px));
            `
        }
    }}
`

export {
    Wrapper,
    LeftArrow,
    RightArrow
}