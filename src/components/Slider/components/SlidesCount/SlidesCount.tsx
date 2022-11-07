import useSlider from '../../hooks/useSlider'

import * as Styled from './style'
import type * as Types from './types'

const SlidesCount: Types.SlidesCountComponent = ({ prefix, className }) => {
    const {
        index,
        slidesLength
    } = useSlider()

    return (
        <Styled.Wrapper className={className}>
            {`${prefix ? `${prefix} ` : ''}${index + 1} / ${slidesLength}`}
        </Styled.Wrapper>
    )
}

export default SlidesCount