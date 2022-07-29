import React, {
    useState,
    useCallback
} from 'react'

import DateUtility from '../../utils/date'

import TimePicker from './index'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Basic: Story<Types.TimePickerProps> = (props) => {
    const roundToNearestMinutes = useCallback((date) => {
        if (date && props.timeIntervals && props.timeIntervals > 1) {
            const roundedMinutes = Math.floor(DateUtility.getMinutes(date) / props.timeIntervals) * props.timeIntervals
            return DateUtility.setMinutes(DateUtility.startOfMinute(date), roundedMinutes)
        } else {
            return date
        }
    }, [props.timeIntervals])

    const [value, setValue] = useState<Date | null | undefined>(roundToNearestMinutes(new Date()))

    const handleOnClear = () => {
        setValue(null)
    }

    const handlOnChange = (date: Date) => {
        setValue(roundToNearestMinutes(date))
    }

    return (
        <>
            <p style={{ marginBottom: '10px'}}>
                {'Time picker'}
            </p>

            <TimePicker
                {...props}
                selected={value}
                onClear={handleOnClear}
                onChange={handlOnChange}
            />
        </>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Developments/Components/TimePicker',
    component: TimePicker,
    argTypes: {},
    args: {
        locale: 'sv',
        dateFormat: 'p',
        disabled: false,
        isClearable: false,
        timeIntervals: 15,
        placeholderText: 'Time',
        inputProps: {
            variant: 'outline'
        }
    }
} as Meta<typeof TimePicker>