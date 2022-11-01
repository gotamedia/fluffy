import useSlider from '../../hooks/useSlider'

import * as Styled from './style'
import type * as Types from './types'

const Navigator: Types.NavigatorComponent = () => {
    const {
        variant,
        direction,
        onNext,
        onPrevious
    } = useSlider()

    return (
        <>
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
        </>
    )
}

export default Navigator