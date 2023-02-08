import useSlider from '../../hooks/useSlider'

import * as Styled from './style'
import type * as Types from './types'

const Navigation: Types.NavigationComponent = ({ className }) => {
    const {
        variant,
        size,
        direction,
        index,
        slidesLength,
        loop,
        onNext,
        onPrevious
    } = useSlider()

    const canGoNext = loop || ((index +1) < slidesLength)
    const canGoPrevious = loop || index !== 0

    return (
        <Styled.Wrapper className={className}>
            <Styled.LeftArrow
                variant={variant}
                $size={size}
                disabled={!canGoPrevious}
                $direction={direction}
                onClick={onPrevious}
            />

            <Styled.RightArrow
                variant={variant}
                $size={size}
                disabled={!canGoNext}
                $direction={direction}
                onClick={onNext}
            />
        </Styled.Wrapper>
    )
}

export default Navigation