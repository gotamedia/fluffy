import { tint } from 'polished'

import type { ThemeStyleItem } from '@root/types'

// @ts-ignore
import datePickerStyle from '../../../node_modules/react-datepicker/dist/react-datepicker.css'

export type DatePickerThemeType = {
    style: {
        datepicker: string,
        root: ThemeStyleItem,
        calendar: ThemeStyleItem,
        input: ThemeStyleItem,
        icon: ThemeStyleItem
    }
}

const DatePickerTheme: DatePickerThemeType = {
    style: {
        datepicker: datePickerStyle,
        root: {
            '.react-datepicker-popper': {
                zIndex: 999
            }
        },
        calendar: ({ theme }) => ({
            padding: '0',
            width: '360px',
            borderRadius: '2px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.07)',
            border: '1px solid #DADAD8',
            background: '#FFFFFF',

            '.react-datepicker__day--selecting-range-start.react-datepicker__day--selecting-range-end': {
                boxShadow: 'none',
                borderRadius: '2px'
            },

            '.react-datepicker': {
                '&__navigation': {
                    margin: '16px',
                    height: '17px',
                    width: '16px'
                },

                '&__current-month': {
                    marginTop: '16px',
                    marginBottom: '8px'
                },

                '&__week': {
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '0 16px',
                    marginBottom: '8px',

                    '&:last-child': {
                        marginBottom: 0
                    }
                },

                '&__month': {
                    margin: '0',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'unset',

                    '&-container': {
                        paddingBottom: '16px'
                    }
                },

                '&__header': {
                    border: '0',
                    padding: '0',
                    backgroundColor: '#FFFFFF'
                },

                '&__month-container': {
                    float: 'none'
                },

                '&__navigation-icon': {
                    '&:before': {
                        borderColor: '#2E2A25'
                    }
                },

                '&__day': {
                    width: '43px',
                    height: '35px',
                    margin: '0',
                    marginRight: '4px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'black',
                    borderRadius: '2px',

                    '&:last-child': {
                        marginRight: 0
                    },

                    '&:hover': {
                        backgroundColor: tint(0.93, theme.colors.brand)
                    },

                    '&--outside-month': {
                        color: '#8A8A8D',

                        '&.react-datepicker__day': `
                            &--023,
                            &--024,
                            &--025,
                            &--026,
                            &--027,
                            &--028,
                            &--029,
                            &--030,
                            &--031 {
                                cursor: 'default',
                                color: 'transparent',
                                backgroundColor: 'transparent',

                                '&.react-datepicker__day--in': {
                                    '&-range': {
                                        color: 'transparent',
                                        backgroundColor: 'transparent'
                                    },

                                    '&-selecting-range': {
                                        color: 'transparent',
                                        backgroundColor: 'transparent',
                                        boxShadow: 'none'
                                    }
                                }

                                '&:hover': {
                                    pointerEvents: 'none',
                                    backgroundColor: 'unset'
                                }
                            }
                        `
                    },

                    '&--in': {
                        '&-range': {
                            color: 'white',
                            borderRadius: '0',
                            backgroundColor: theme.colors.brand,

                            '&:not(.react-datepicker__day--in-selecting-range)': {
                                color: 'black',
                                backgroundColor: '#f0f0f0'
                            }
                        },

                        '&-selecting-range': {
                            color: 'white',
                            borderRadius: '0',
                            backgroundColor: theme.colors.brand,
                            boxShadow: `5px 0 0px 0px ${theme.colors.brand}, -4px 0 0px 0px ${theme.colors.brand}`,

                            '&:hover': {
                                backgroundColor: theme.colors.brand
                            }
                        }
                    },

                    '&--selecting-range': {
                        '&-start': {
                            boxshadow: `5px 0 0px 0px ${theme.colors.brand}`,
                            borderRadius: '2px 0 0 2px'
                        },

                        '&-end': {
                            boxShadow: `-4px 0 0px 0px ${theme.colors.brand}`,
                            borderRadius: '0 2px 2px 0'
                        }
                    },
                    
                    '&--selected': {
                        color: 'white',
                        backgroundColor: theme.colors.brand,

                        '&:hover': {
                            backgroundColor: theme.colors.brand
                        }
                    },

                    '&--disabled': {
                        color: '#8A8A8D'
                    },

                    '&--keyboard-selected': {
                        backgroundColor: 'unset',
                        outline: 'none',
                        zIndex: '1',
                        boxShadow: `0 0 0 2px ${theme.colors.brand}`,

                        '&.react-datepicker__day--in': {
                            '&-range': {
                                color: 'white',
                                backgroundColor: theme.colors.brand
                            },

                            '&-selecting-range': {
                                color: 'white',
                                backgroundColor: theme.colors.brand
                            }
                        }
                    },

                    '&-name': {
                        margin: '0',
                        width: '43px',
                        height: '35px',
                        color: '#8A8A8D',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    },

                    '&-names': {
                        marginBottom: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0 4px',
                        padding: '0 16px'
                    }
                }
            }
        }),
        input: {
            width: '300px',
            minWidth: '300px'
        },
        icon: ({ theme }) => ({
            cursor: 'pointer',
            color: theme.colors.brand,
            fill: theme.colors.brand
        })
    }
}

export default DatePickerTheme