import {
    forwardRef,
    useCallback
} from 'react'

import * as Styled from './style'
import type * as Types from './types'
import type { KeyboardEventHandler } from 'react'

const SelectFilter: Types.SelectFilterComponent = forwardRef((props, ref) => {
    const {
        value,
        style,
        onChange,
        onKeyDown
    } = props

    const handleOnFilterValueChange = useCallback((value: string) => {
        onChange(value)
    }, [onChange])

    const handleOnFilterClear = useCallback(() => {
        onChange('')
    }, [onChange])

    const hadnleOnInputKeyDown = useCallback<KeyboardEventHandler<HTMLInputElement>>((event) => {
        onKeyDown(event)
    }, [onKeyDown])

    return (
        <Styled.InputGroup style={style}>
            <Styled.Input
                enterKeyHint={'enter'}
                ref={ref}
                value={value}
                onValueChange={handleOnFilterValueChange}
                onKeyDown={hadnleOnInputKeyDown}
            />

            <Styled.ClearIcon onClick={handleOnFilterClear}/>
        </Styled.InputGroup>
    )
})

export default SelectFilter