import React, {
    useState,
    useCallback
} from 'react'

import DatePicker from './index'

import DateUtility from '../../utils/date'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Basic: Story<Types.DatePickerProps> = (props) => {
    const [value, setValue] = useState<Date | null | undefined>(new Date())

    const handlOnChange = useCallback((date: Date) => {
        setValue(date)
    }, [])

    return (
        <>
            <p style={{ marginBottom: '10px'}}>
                {'Date picker'}
            </p>

            <DatePicker
                {...props}
                selected={value}
                onChange={handlOnChange}
            />
        </>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

const WithSeparateRange: Story<Types.DatePickerProps> = (props) => {
    const [startDate, setStartDate] = useState<Date | null | undefined>()
    const [endDate, setEndDate] = useState<Date | null | undefined>()

    const handleOnStartDateChange = useCallback((value) => {
        if (value && endDate && DateUtility.isAfter(value, endDate)) {
            setEndDate(value)
        }

        setStartDate(value)
    }, [endDate])

    const handleOnEndDateChange = useCallback((value) => {
        if (value && startDate && DateUtility.isBefore(value, startDate)) {
            setStartDate(value)
        }

        setEndDate(value)
    }, [startDate])

    return (
        <div style={{
            display: 'flex',
            gap: '20px'
        }}>
            <div>
                <p style={{ marginBottom: '10px'}}>
                    {'Start date'}
                </p>

                <DatePicker
                    {...props}
                    selectsStart
                    selected={startDate}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={handleOnStartDateChange}
                />
            </div>

            <div>
                <p style={{ marginBottom: '10px'}}>
                    {'End date'}
                </p>

                <DatePicker
                    {...props}
                    selectsEnd
                    selected={endDate}
                    startDate={startDate}
                    endDate={endDate}
                    onChange={handleOnEndDateChange}
                />
            </div>
        </div>
    )
}

const WithRangeStory = WithSeparateRange.bind({})
WithRangeStory.storyName = 'With separate range inputs'

const WithCombinedRange: Story<Types.DatePickerProps> = (props) => {
    const [startDate, setStartDate] = useState<Date | null | undefined>()
    const [endDate, setEndDate] = useState<Date | null | undefined>()

    const handleOnChange = useCallback((dates) => {
        if (dates) {
            setStartDate(dates[0])
            setEndDate(dates[1])
        }
    }, [])

    return (
        <>
            <p style={{ marginBottom: '10px'}}>
                {'Range date'}
            </p>

            <DatePicker
                {...props}
                selected={startDate}
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={handleOnChange}
            />
        </>
    )
}

const WithCombinedRangeStory = WithCombinedRange.bind({})
WithCombinedRangeStory.storyName = 'With combined range input'

export {
    BasicStory,
    WithRangeStory,
    WithCombinedRangeStory
}

export default {
    title: 'Components/DatePicker',
    component: DatePicker,
    argTypes: {},
    args: {
        locale: 'sv',
        dateFormat: 'PPP',
        disabled: false,
        placeholderText: 'Select your date',
        inputProps: {
            variant: 'outline'
        }
    }
} as Meta<typeof DatePicker>