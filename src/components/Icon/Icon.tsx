import {
    forwardRef,
    useMemo
} from 'react'

import * as MiniIcons from '@heroicons/react/20/solid'
import * as OutlineIcons from '@heroicons/react/24/outline'
import * as SolidIcons from '@heroicons/react/24/solid'

import { IconVariants } from './types'

import * as Styled from './style'
import type * as Types from './types'

const getIcon = (icon: Types.Icon, variant: Types.IconVariantType) => {
    let iconComponent = null

    switch (variant) {
        case IconVariants.Mini:
            //@ts-ignore
            iconComponent = MiniIcons[`${icon}Icon`]
            break
        case IconVariants.Outline:
            //@ts-ignore
            iconComponent = OutlineIcons[`${icon}Icon`]
            break
        case IconVariants.Solid:
            //@ts-ignore
            iconComponent = SolidIcons[`${icon}Icon`]
            break
        default:
            console.warn(`Invalid icon variant, couldn't find the requested icon: ${icon} with variant: ${variant}, defaulting to "solid"`)
            //@ts-ignore
            iconComponent = SolidIcons[`${icon}Icon`]
            break
    }

    return iconComponent
}

const Icon: Types.IconComponent = forwardRef((props, ref) => {
    const {
        icon,
        variant = 'outline',
        spin = false,
        size,
        className,
        style,
        onClick,
        // @ts-ignore, quick ugly fix to remove unused props and prevent the prop from being passed to the icon component.
        variantType,
        ...filteredProps
    } = props

    const IconComponent = useMemo(() => {
        return getIcon(icon, variant)
    }, [icon, variant])

    const content = IconComponent ? (
        <IconComponent
            {...filteredProps}
            ref={undefined}
        />
    ) : (
        null
    )

    return (
        <Styled.Span
            ref={ref}
            style={style}
            $size={size}
            $spin={spin}
            onClick={onClick}
            className={`fluffy-icon ${className ? className : ''}`}
        >
            {content}
        </Styled.Span>
    )
})

Icon.displayName = 'Icon'

export default Icon
