import styled from 'styled-components'

import { tint } from 'polished'

import ReactDatePicker from 'react-datepicker'

// @ts-ignore
import datePickerStyle from '../../../node_modules/react-datepicker/dist/react-datepicker.css'

const Wrapper = styled.div`
    ${datePickerStyle};
    
    .react-datepicker-popper {
        z-index: 999;
    }

    .fluffy-date-picker {
        padding: 0;
        width: 360px;
        border-radius: 2px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.07);
        border: 1px solid #DADAD8;
        background: #FFFFFF;

        .react-datepicker__day--selecting-range-start.react-datepicker__day--selecting-range-end {
            box-shadow: none;
            border-radius: 2px;
        }

        .react-datepicker {
            &__navigation {
                margin: 16px;
                height: 17px;
                width: 16px;
            }

            &__current-month {
                margin-top: 16px;
                margin-bottom: 8px;
            }

            &__week {
                display: flex;
                justify-content: center;
                padding: 0 16px;
                margin-bottom: 8px;

                &:last-child {
                    margin-bottom: 0;
                }
            }

            &__month {
                margin: 0;
                display: flex;
                flex-direction: column;
                text-align: unset;

                &-container {
                    padding-bottom: 16px;
                }
            }

            &__header {
                border: 0;
                padding: 0;
                background-color: #FFFFFF;
            }

            &__month-container {
                float: none;
            }

            &__navigation-icon {
                &:before {
                    border-color: #2E2A25;
                }
            }

            &__day {
                width: 43px;
                height: 35px;
                margin: 0;
                margin-right: 4px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                color: black;
                border-radius: 2px;

                &:last-child {
                    margin-right: 0;
                }

                &:hover {
                    background-color: ${({ theme }) => tint(0.93, theme.colors.brand)};
                }

                &--outside-month {
                    color: #8A8A8D;

                    &.react-datepicker__day {
                        &--023,
                        &--024,
                        &--025,
                        &--026,
                        &--027,
                        &--028,
                        &--029,
                        &--030,
                        &--031 {
                            cursor: default;
                            color: transparent;
                            background-color: transparent;

                            &.react-datepicker__day--in {
                                &-range {
                                    color: transparent;
                                    background-color: transparent;
                                }

                                &-selecting-range {
                                    color: transparent;
                                    background-color: transparent;
                                    box-shadow: none;
                                }
                            }

                            &:hover {
                                pointer-events: none;
                                background-color: unset;
                            }
                        }
                    }
                }

                &--in {
                    &-range {
                        color: white;
                        border-radius: 0;
                        background-color: ${({ theme }) => theme.colors.brand};

                        &:not(.react-datepicker__day--in-selecting-range) {
                            color: black;
                            background-color: #f0f0f0;
                        }
                    }

                    &-selecting-range {
                        color: white;
                        border-radius: 0;
                        background-color: ${({ theme }) => theme.colors.brand};
                        box-shadow: 5px 0 0px 0px ${({ theme }) => theme.colors.brand}, -4px 0 0px 0px ${({ theme }) => theme.colors.brand};

                        &:hover {
                            background-color: ${({ theme }) => theme.colors.brand};
                        }
                    }
                }

                &--selecting-range {
                    &-start {
                        box-shadow: 5px 0 0px 0px ${({ theme }) => theme.colors.brand};
                        border-radius: 2px 0 0 2px;
                    }

                    &-end {
                        box-shadow: -4px 0 0px 0px ${({ theme }) => theme.colors.brand};
                        border-radius: 0 2px 2px 0;
                    }

                }
                
                &--selected {
                    color: white;
                    background-color: ${({ theme }) => theme.colors.brand};

                    &:hover {
                        background-color: ${({ theme }) => theme.colors.brand};
                    }
                }

                &--disabled {
                    color: #8A8A8D;
                }

                &--keyboard-selected {
                    background-color: unset;
                    outline: none;
                    z-index: 1;
                    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.brand};

                    &.react-datepicker__day--in {
                        &-range {
                            color: white;
                            background-color: ${({ theme }) => theme.colors.brand};
                        }

                        &-selecting-range {
                            color: white;
                            background-color: ${({ theme }) => theme.colors.brand};
                        }
                    }
                }

                &-name {
                    margin: 0;
                    width: 43px;
                    height: 35px;
                    color: #8A8A8D;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                &-names {
                    margin-bottom: 0;
                    display: flex;
                    justify-content: center;
                    gap: 0 4px;
                    padding: 0 16px;
                }
            }
            
        }
    }
`

const DatePicker = styled(ReactDatePicker)`
    
`

export {
    Wrapper,
    DatePicker
}