import { tint } from 'polished'

import type {
    ThemeStyleItem,
    ComponentTheme
} from '@root/types'
import type { TimePickerProps } from './types'

export type TimePickerThemeType = ComponentTheme<{
    defaultProps: Partial<TimePickerProps>,
    style: {
        root: ThemeStyleItem,
        calendar: ThemeStyleItem,
        input: ThemeStyleItem,
        icon: ThemeStyleItem
    }
}>

const TimePickerTheme: TimePickerThemeType = {
    defaultProps: {
        timeIntervals: 15,
        timeCaption: 'Time',
        dateFormat: 'p',
        isClearable: true
    },
    style: {
        root: {
            
        },
        calendar: ({ theme }) => ({
            width: 'auto',

            '.react-datepicker-time': {
                '&__header': {
                    padding: '10px'
                }
            },

            '.react-datepicker__time-container': {
                '.react-datepicker__time-box': {
                    'ul.react-datepicker__time-list': {
                        'li.react-datepicker__time-list-item': {
                            display: 'flex',
                            margin: 'auto',
                            justifyContent: 'center',
                            alignItems: 'center',

                            '&:hover': {
                                backgroundColor: tint(0.93, theme.colors.brand)
                            },

                            '&--selected': {
                                color: 'white',
                                backgroundColor: theme.colors.brand,

                                '&:hover': {
                                    backgroundColor: theme.colors.brand
                                }
                            }
                        }
                    }
                }
            }
        }),
        input: {
            width: '125px',
            minWidth: '125px'
        },
        icon: ({ theme }) => ({
            cursor: 'pointer',
            color: theme.colors.brand,
            fill: theme.colors.brand
        })
    }
}

export default TimePickerTheme