import {
    useState,
    useEffect
} from 'react'

import { IconVariants } from './types'

import * as Styled from './style'
import type * as Types from './types'
import type { FC } from 'react'

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

const Icon: FC<Types.IconProps> = (props) => {
    const {
        icon,
        variant = 'outline',
        spin = false,
        size,
        className,
        style,
        ...filteredProps
    } = props

    const [Component, setComponent] = useState<Types.IconComponent | null>(null)

    useEffect(() => {
        if (icon) {
            try {
                const component = getIcon(icon, variant) as Types.IconComponent
                setComponent(() => component as Types.IconComponent)
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

    return (
        <Styled.Span
            style={style}
            $size={size}
            $spin={spin}
            className={`fluffy-icon ${className ? className : ''}`}
        >
            {content}
        </Styled.Span>
    )
}

export default Icon
