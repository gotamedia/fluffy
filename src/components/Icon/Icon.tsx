import {
    forwardRef,
    useMemo
} from 'react'

import * as MiniIcons from '@heroicons/react/20/solid'
import * as OutlineIcons from '@heroicons/react/24/outline'
import * as SolidIcons from '@heroicons/react/24/solid'

import classNames from '@utils/classNames'

import withThemeProps from '@internal/hocs/withThemeProps'

import { IconVariants } from './types'

import * as Styled from './style'
import type * as Types from './types'
import type { ForwardedRef } from 'react'

const getIcon = (icon: Types.IconType, variant: Types.IconVariantType) => {
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

//@ts-ignore
export const Icon: Types.IconComponent = forwardRef((props, ref) => {
    const {
        icon,
        variant = 'outline',
        spin = false,
        size,
        className,
        style,
        onClick,
        ...filteredProps
    } = props

    const IconComponent = useMemo(() => {
        return getIcon(icon, variant) as Types.SVGIconComponent
    }, [icon, variant])

    const content = IconComponent ? (
        <IconComponent {...filteredProps} />
    ) : (
        null
    )

    const classNameValue = classNames({
        'fluffy-icon': true,
        [className || '']: true
    })

    const componentState = {
        spin: spin
    }

    return (
        <Styled.Span
            ref={ref as ForwardedRef<HTMLSpanElement>}
            style={style}
            $size={size}
            $componentState={componentState}
            className={classNameValue}
            onClick={onClick}
        >
            {content}
        </Styled.Span>
    )
})

//@ts-ignore
export default withThemeProps(Icon) as Types.IconComponent