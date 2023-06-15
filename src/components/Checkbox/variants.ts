import { css } from 'styled-components'

import { shade } from 'polished'

import { CheckboxVariantTypes } from './types'
import type { CheckboxVariantType } from './types'

const primary = ($variantType?: CheckboxVariantType) => {
    switch ($variantType) {
        case CheckboxVariantTypes.Default:
            return css`
                &:checked {
                    background-color: ${({ theme }) => theme.colors.brand};
                    border-color: ${({ theme }) => shade(0.18, theme.colors.brand)};

                    &:before {
                        background-color: white;
                    }

                    &:after {
                        background-color: white;
                    }

                    &:hover {
                        background-color: ${({ theme }) => shade(0.08, theme.colors.brand)};
                    }
                }
            `

        case CheckboxVariantTypes.Contrast:
            return css`
                &:checked {
                    background-color: #2E2A25;
                    border-color: white;

                    &:before {
                        background-color: white;
                    }

                    &:after {
                        background-color: white;
                    }

                    &:hover {
                        background-color: ${shade(0.08, "#2E2A25")};
                    }
                }
            `

        case CheckboxVariantTypes.HighContrast:
            return css`
                &:checked {
                    background-color: white;
                    border-color: #2E2A25;

                    &:before {
                        background-color: #2E2A25;
                    }

                    &:after {
                        background-color: #2E2A25;
                    }
                }
            `

        case CheckboxVariantTypes.Generic:
            return css`
                &:checked {
                    background-color: #55565A;
                    border-color: ${shade(0.18, '#55565A')};

                    &:before {
                        background-color: white;
                    }

                    &:after {
                        background-color: white;
                    }

                    &:hover {
                        background-color: ${shade(0.08, "#55565A")};
                    }
                }
            `
    }
}

const secondary = ($variantType?: CheckboxVariantType) => css`
    ${() => {
        switch ($variantType) {
            case CheckboxVariantTypes.Default:
                return css`
                    &:checked {
                        background-color: white;
                        border-color: ${({ theme }) => shade(0.18, theme.colors.brand)};

                        &:before {
                            background-color: ${({ theme }) => theme.colors.brand};
                        }

                        &:after {
                            background-color: ${({ theme }) => theme.colors.brand};
                        }

                        &:hover {
                            background-color: ${shade(0.08, "white")};
                        }
                    }
                `

            case CheckboxVariantTypes.Contrast:
                return css`
                    &:checked {
                        background-color: #2E2A25;
                        border-color: white;

                        &:before {
                            background-color: white;
                        }

                        &:after {
                            background-color: white;
                        }

                        &:hover {
                            background-color: ${shade(0.08, "#2E2A25")};
                        }
                    }
                `

            case CheckboxVariantTypes.HighContrast:
                return css`
                    &:checked {
                        background-color: white;
                        border-color: #2E2A25;

                        &:before {
                            background-color: #2E2A25;
                        }

                        &:after {
                            background-color: #2E2A25;
                        }

                        &:hover {
                            background-color: ${shade(0.08, "white")};
                        }
                    }
                `

            case CheckboxVariantTypes.Generic:
                return css`
                    &:checked {
                        background-color: white;
                        border-color: ${shade(0.18, '#55565A')};

                        &:before {
                            background-color: #55565A;
                        }

                        &:after {
                            background-color: #55565A;
                        }

                        &:hover {
                            background-color: ${shade(0.08, "white")};
                        }
                    }
                `
        }
    }}
`

const variants = {
    primary: primary,
    secondary: secondary,
}

export default variants