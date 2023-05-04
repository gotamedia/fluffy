import { forwardRef } from 'react'

import Icon from '../Icon'

import {
    IconButtonSizes,
    IconButtonVariants,
    IconButtonVariantTypes,
    IconButtonShapes
} from './types'

import * as Styled from './style'
import type * as Types from './types'

const IconButton: Types.IconButtonComponent = forwardRef((props, ref) => {
    const {
        size = IconButtonSizes.Normal,
        variant = IconButtonVariants.Primary,
        variantType = IconButtonVariantTypes.Default,
        shape = IconButtonShapes.Square,
        icon,
        ...DOMProps
    } = props
    
    return (
        <Styled.IconButton
            ref={ref}
            $size={size}
            $variant={variant}
            $variantType={variantType}
            $shape={shape}
            {...DOMProps}
        >
            <Icon
                size={size}
                icon={icon}
            />
        </Styled.IconButton>
    )
})

IconButton.displayName = 'IconButton'

export default IconButton