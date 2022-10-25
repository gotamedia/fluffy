import {
    useState,
    useEffect,
    forwardRef
} from 'react'

import classNames from '@utils/classNames'

import WithThemeProps from '@internal/hocs/WithThemeProps'

import { IconVariants } from './types'

import * as Styled from './style'
import type * as Types from './types'

const getIcon = (icon: Types.IconType, variant: Types.IconVariantType) => {
    let path = ''

    switch (variant) {
        case IconVariants.Mini:
            path = `20/solid`
            break
        case IconVariants.Outline:
            path = `24/outline`
            break
        case IconVariants.Solid:
            path = `24/solid`
            break
        default:
            console.warn(`Invalid icon variant, couldn't find the requested icon: ${icon} with variant: ${variant}, defaulting to "solid"`)
            path = `24/solid`
            break
    }

    return require(`@heroicons/react/${path}/${icon}Icon`)
}

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

    const [Component, setComponent] = useState<Types.SVGIconComponent | null>(null)

    useEffect(() => {
        if (icon) {
            try {
                const component = getIcon(icon, variant) as Types.SVGIconComponent
                setComponent(() => component as Types.SVGIconComponent)
            } catch (error) {
                console.warn('Icon not found, could not find icon with icon:', icon)
            }
        }
    }, [icon, variant])

    const content = Component ? (
        <Component {...filteredProps} />
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
            ref={ref}
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

export default WithThemeProps(Icon) as Types.IconComponent