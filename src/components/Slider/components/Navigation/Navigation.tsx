import useSlider from '../../hooks/useSlider'

import * as Styled from './style'
import type * as Types from './types'

const Navigation: Types.NavigationComponent = ({ className }) => {
    const {
        variant,
        direction,
        onNext,
        onPrevious
    } = useSlider()

    return (
        <Styled.Wrapper className={className}>
            <Styled.LeftArrow
                variant={variant}
                $direction={direction}
                onClick={onPrevious}
            />

            <Styled.RightArrow
                variant={variant}
                $direction={direction}
                onClick={onNext}
            />
        </Styled.Wrapper>
    )
}

export default Navigation