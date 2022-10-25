import {
    forwardRef,
    useCallback,
    useEffect
} from 'react'

import DateUtility from '@utils/date'
import classNames from '@utils/classNames'

import WithThemeProps from '@internal/hocs/WithThemeProps'

import DatePickerInput from './components/DatePickerInput'

import * as Styled from './style'
import type * as Types from './types'
import type { SyntheticEvent } from 'react'

export const DatePicker: Types.DatePickerComponent = forwardRef((props, ref) => {
    const {
        className,
        locale,
        popperPlacement,
        inputProps,
        calendarClassName,
        onClear,
        isClearable,
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

    const classNameValue = classNames({
        'fluffy-date-picker': true,
        [className || '']: true
    })

    const calendarClassNameValue = classNames({
        'fluffy-date-picker-calendar': true,
        [calendarClassName || '']: true
    })

    return (
        <Styled.Wrapper className={classNameValue}>
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
                calendarClassName={calendarClassNameValue}
            />
        </Styled.Wrapper>
    )
})

DatePicker.displayName = 'DatePicker'

export default WithThemeProps(DatePicker) as Types.DatePickerComponent