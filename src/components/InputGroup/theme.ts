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
                borderTopLeftRadius: $componentState?.elements?.left === 'element' ? '0' : 'INVALUD_CSS',
                borderBottomLeftRadius: $componentState?.elements?.left === 'element' ? '0' : 'INVALUD_CSS',
                borderTopRightRadius: $componentState?.elements?.right === 'element' ? '0' : 'INVALUD_CSS',
                borderBottomRightRadius: $componentState?.elements?.right === 'element' ? '0' : 'INVALUD_CSS',

                '&:focus': {
                    zIndex: $componentState?.elements?.left === 'element' || $componentState?.elements?.right === 'element' ? 1 : 'INVALID_CSS'
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
                paddingLeft: $componentState?.elements?.left === 'icon' ? '26px' : 'INVALID_CSS',
                paddingRight: $componentState?.elements?.right === 'icon' ? '26px' : 'INVALID_CSS'
            }
        }),
        small: ({ $componentState }) => ({
            '.fluffy-input-group__icon': {
                margin: 'auto 8px'
            },
        
            'input': {
                paddingLeft: $componentState?.elements?.left === 'icon' ? '34px' : 'INVALID_CSS',
                paddingRight: $componentState?.elements?.right === 'icon' ? '34px' : 'INVALID_CSS'
            }
        }),
        normal: ({ $componentState }) => ({
            '.fluffy-input-group__icon': {
                margin: 'auto 10px'
            },
        
            'input': {
                paddingLeft: $componentState?.elements?.left === 'icon' ? '46px' : 'INVALID_CSS',
                paddingRight: $componentState?.elements?.right === 'icon' ? '46px' : 'INVALID_CSS'
            }
        }),
        big: ({ $componentState }) => ({
            '.fluffy-input-group__icon': {
                margin: 'auto 12px'
            },
        
            'input': {
                paddingLeft: $componentState?.elements?.left === 'icon' ? '58px' : 'INVALID_CSS',
                paddingRight: $componentState?.elements?.right === 'icon' ? '58px' : 'INVALID_CSS'
            }
        }),
        huge: ({ $componentState }) => ({
            '.fluffy-input-group__icon': {
                margin: 'auto 12px'
            },
        
            'input': {
                paddingLeft: $componentState?.elements?.left === 'icon' ? '62px' : 'INVALID_CSS',
                paddingRight: $componentState?.elements?.right === 'icon' ? '62px' : 'INVALID_CSS'
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