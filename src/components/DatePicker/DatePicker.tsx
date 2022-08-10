import {
    forwardRef,
    useCallback,
    useEffect
} from 'react'

import DateUtility from '@utils/date'

import DatePickerInput from './components/DatePickerInput'

import * as Styled from './style'
import type * as Types from './types'
import type { SyntheticEvent } from 'react'

const DatePicker: Types.DatePickerComponent = forwardRef((props, ref) => {
    const {
        className,
        locale = 'sv',
        popperPlacement = 'bottom-start',
        inputProps,
        calendarClassName,
        onClear,
        isClearable = false,
        onChange,
        ...filteredProps
    } = props

    useEffect(() => {
        const localeName = locale
        //@ts-ignore
        const localeObject = DateUtility.locales[localeName]

        DateUtility.registerLocale(localeName as string, localeObject)
    }, [locale])

    const handleOnChange = useCallback((date: Date | null, event?: SyntheticEvent<any, Event>) => {
        if (date) {
            if (typeof onChange === 'function') {
                onChange(date, event)
            }
        } else if (isClearable && typeof onClear === 'function') {
            onClear()
        }
    }, [onChange, isClearable, onClear])

    return (
        <Styled.Wrapper className={className}>
            <Styled.DatePicker
                ref={ref}
                locale={locale}
                popperPlacement={popperPlacement}
                showPopperArrow={false}
                customInput={(
                    <DatePickerInput
                        {...inputProps}
                        isClearable={isClearable}
                        onClear={onClear}
                    />
                )}
                onChange={handleOnChange}
                {...filteredProps}
                calendarClassName={`${calendarClassName ? calendarClassName : ''} fluffy-date-picker`}
            />
        </Styled.Wrapper>
    )
})

DatePicker.displayName = 'DatePicker'

export default DatePicker