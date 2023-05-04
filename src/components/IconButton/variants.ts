import { css } from 'styled-components'

import buttonVariants from '@components/Button/variants'

import { IconButtonVariantTypes } from './types'
import type { IconButtonVariantType } from './types'

const primary = buttonVariants.primary

const secondary = buttonVariants.secondary

// TODO: Remove contrast variant and replace with: variantType.
const contrast = ($variantType?: IconButtonVariantType) => {
    const buttonStyle = buttonVariants.outlineTransparent($variantType)

    switch ($variantType) {
        case IconButtonVariantTypes.Default:
            return css`
                ${buttonStyle};

                background-color: #fff;
                border-color: ${({ theme }) => theme.colors.grey[4]};
                &:focus {
                    box-shadow: none;
                }
            
                &:disabled {
                    background-color: ${({ theme }) => theme.colors.grey[4]};
                    border-color: ${({ theme }) => theme.colors.grey[4]};
                }
            
            `
    }
}

const outline = buttonVariants.outline

const variants = {
    primary,
    secondary,
    outline,
    contrast
}

export default variants