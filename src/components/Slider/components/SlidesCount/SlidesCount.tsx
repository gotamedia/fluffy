import classNames from '@utils/classNames'

import useSlider from '../../hooks/useSlider'

import * as Styled from './style'
import type * as Types from './types'

const SlidesCount: Types.SlidesCountComponent = ({ prefix, className }) => {
    const {
        index,
        slidesLength
    } = useSlider()

    const wrapperClassName = classNames({
        'fluffy-slider-slides-count': true,
        [className || '']: true
    })

    return (
        <Styled.Wrapper className={wrapperClassName}>
            {`${prefix ? `${prefix} ` : ''}${index + 1} / ${slidesLength}`}
        </Styled.Wrapper>
    )
}

export default SlidesCount