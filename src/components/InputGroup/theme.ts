import type { ThemeStyleItem } from '@root/types'

const sharedStyle = {
    focus: {
        '&:focus': {
            zIndex: 1
        }
    }
}

export type InputGroupThemeType = {
    style: {
        root: ThemeStyleItem
    },
    sizes: {
        tiny: ThemeStyleItem,
        small: ThemeStyleItem,
        normal: ThemeStyleItem,
        big: ThemeStyleItem,
        huge: ThemeStyleItem
    },
    variants: {
        primary: ThemeStyleItem,
        secondary: ThemeStyleItem,
        outline: ThemeStyleItem
    }
}

// TODO: fix better styling for condition cases
const InputGroupTheme: InputGroupThemeType = {
    style: {
        root: ({ $componentState }) => ({
            display: 'inline-flex',
            position: 'relative',

            '.fluffy-input-group': {
                '&__icon': {
                    zIndex: '1',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translate(-0, -50%)',
        
                    '&.fluffy-input-group': {
                        '&--left': {
                            left: 0
                        },
        
                        '&--right': {
                            right: 0
                        }
                    }
                },
        
                '&__element': {
                    '&.fluffy-input-group': {
                        '&--left': {
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
        
                            ...sharedStyle.focus
                        },
        
                        '&--right': {
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
        
                            ...sharedStyle.focus
                        }
                    }
                }
            },

            'input': {
                ...($componentState?.elements?.left === 'element' ? {
                    borderTopLeftRadius: '0',
                    borderBottomLeftRadius: '0'
                } : {}),

                ...($componentState?.elements?.right === 'element' ? {
                    borderTopRightRadius: '0',
                    borderBottomRightRadius: '0'
                } : {}),

                '&:focus': {
                    ...($componentState?.elements?.left === 'element' ||
                        $componentState?.elements?.right === 'element' ? {
                            zIndex: 1
                    } : {})
                }
            }
        })
    },
    sizes: {
        tiny: ({ $componentState }) => ({
            '.fluffy-input-group__icon': {
                margin: 'auto 6px'
            },
        
            'input': {
                ...($componentState?.elements?.left === 'icon' ? {
                    paddingLeft: '26px'
                } : {}),

                ...($componentState?.elements?.right === 'icon' ? {
                    paddingRight: '26px'
                } : {})
            }
        }),
        small: ({ $componentState }) => ({
            '.fluffy-input-group__icon': {
                margin: 'auto 8px'
            },
        
            'input': {
                ...($componentState?.elements?.left === 'icon' ? {
                    paddingLeft: '34px'
                } : {}),

                ...($componentState?.elements?.right === 'icon' ? {
                    paddingRight: '34px'
                } : {})
            }
        }),
        normal: ({ $componentState }) => ({
            '.fluffy-input-group__icon': {
                margin: 'auto 10px'
            },
        
            'input': {
                ...($componentState?.elements?.left === 'icon' ? {
                    paddingLeft: '46px'
                } : {}),

                ...($componentState?.elements?.right === 'icon' ? {
                    paddingRight: '46px'
                } : {})
            }
        }),
        big: ({ $componentState }) => ({
            '.fluffy-input-group__icon': {
                margin: 'auto 12px'
            },
        
            'input': {
                ...($componentState?.elements?.left === 'icon' ? {
                    paddingLeft: '58px'
                } : {}),

                ...($componentState?.elements?.right === 'icon' ? {
                    paddingRight: '58px'
                } : {})
            }
        }),
        huge: ({ $componentState }) => ({
            '.fluffy-input-group__icon': {
                margin: 'auto 12px'
            },
        
            'input': {
                ...($componentState?.elements?.left === 'icon' ? {
                    paddingLeft: '62px'
                } : {}),

                ...($componentState?.elements?.right === 'icon' ? {
                    paddingRight: '62px'
                } : {})
            }
        })
    },
    variants: {
        primary: {},
        secondary: {
            '.fluffy-input-group': {
                '&__element': {
                    '&.fluffy-input-group': {
                        '&--left': {
                            borderRight: '1px solid currentColor'
                        },
        
                        '&--right': {
                            borderLeft: '1px solid currentColor'
                        }
                    }
                }
            }
        },
        outline: {},
    }
}

export default InputGroupTheme