import { forwardRef } from 'react'

import * as Styled from './style'
import type { InputComponent } from '@components/Input'

const DatepickerInput: InputComponent = forwardRef((props, ref) => {
    return (
        <Styled.InputGroup>
            <Styled.Input
                ref={ref}
                {...props}
            />

            <Styled.Icon />
        </Styled.InputGroup>
    )
})

export default DatepickerInput