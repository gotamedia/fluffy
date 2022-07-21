import styled from 'styled-components'

import { tint } from 'polished'

import DatePickerComponent from '@root/components/DatePicker'

const DatePicker = styled(DatePickerComponent)`
    .fluffy-time-picker {
        width: auto;

        .react-datepicker-time {
            &__header {
                padding: 10px;
            }
        }

        .react-datepicker__time-container {
            .react-datepicker__time-box {
                ul.react-datepicker__time-list {
                    li.react-datepicker__time-list-item {
                        display: flex;
                        margin: auto;
                        justify-content: center;
                        align-items: center;

                        &:hover {
                            background-color: ${({ theme }) => tint(0.93, theme.colors.brand)};
                        }

                        &--selected {
                            color: white;
                            background-color: ${({ theme }) => theme.colors.brand};

                            &:hover {
                                background-color: ${({ theme }) => theme.colors.brand};
                            }
                        }
                    }
                }
            }
        }
    }
`

export {
    DatePicker
}