import { css } from 'styled-components'

import { shade } from 'polished'

const defaultType = css`
    &:checked {
        background-color: ${({ theme }) => theme.colors.brand};
        border-color: ${({ theme }) => shade(0.18, theme.colors.brand)};
    }
`

const highContrast = css`
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

const variantTypes = {
    default: defaultType,
    "high-contrast": highContrast
}

export default variantTypes