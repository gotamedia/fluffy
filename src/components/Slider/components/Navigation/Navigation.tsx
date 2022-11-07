import classNames from '@utils/classNames'

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

    const wrapperClassName = classNames({
        'fluffy-slider-navigation': true,
        [className || '']: true
    })
    
    const componentState = {
        variant: variant,
        direction: direction
    }

    return (
        <Styled.Wrapper
            className={wrapperClassName}
            $componentState={componentState}
        >
            <Styled.LeftArrow
                variant={variant}
                onClick={onPrevious}
                $componentState={componentState}
                className={'fluffy-slider-navigation-previous'}
            />

            <Styled.RightArrow
                variant={variant}
                onClick={onNext}
                $componentState={componentState}
                className={'fluffy-slider-navigation-next'}
            />
        </Styled.Wrapper>
    )
}

export default Navigation