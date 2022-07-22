import {
    forwardRef,
    useEffect
} from 'react'

import DateUtility from '@utils/date'

import DatePickerInput from './components/DatePickerInput'

import * as Styled from './style'
import type * as Types from './types'

import 'react-datepicker/dist/react-datepicker.css'

const DatePicker: Types.DatePickerComponent = forwardRef((props, ref) => {
    const {
        className,
        locale = 'sv',
        popperPlacement = 'bottom-start',
        inputProps,
        calendarClassName,
        ...filteredProps
    } = props

    useEffect(() => {
        const localeName = locale
        //@ts-ignore
        const localeObject = DateUtility.locales[localeName]

        DateUtility.registerLocale(localeName as string, localeObject)
    }, [locale])

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
                    />
                )}
                {...filteredProps}
                calendarClassName={`${calendarClassName ? calendarClassName : ''} fluffy-date-picker`}
            />
        </Styled.Wrapper>
    )
})

DatePicker.displayName = 'DatePicker'

export default DatePicker