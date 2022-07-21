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
    title: 'Components/TimePicker',
    component: TimePicker,
    argTypes: {},
    args: {
        locale: 'sv',
        dateFormat: 'P',
        disabled: false,
        timeIntervals: 15,
        placeholderText: 'Select your date',
        inputProps: {
            variant: 'outline'
        }
    }
} as Meta<typeof TimePicker>