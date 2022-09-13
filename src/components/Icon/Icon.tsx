import { useMemo } from 'react'

import classNames from '@utils/classNames'

import * as Icons from '@root/icons'

import * as Styled from './style'
import * as Types from './types'
import type { FC } from 'react'

export const Icon: FC<Types.IconProps> = (props) => {
    const {
        icon,
        width,
        height,
        size,
        className,
        style,
        ariaLabel,
        onClick,
        color,
        ...filteredProps
    } = props

    const IconCompoennt = useMemo<Types.IconComponent | null>(() => {
        if (icon) {            
            try {
                return Icons[icon] as Types.IconComponent
            } catch(error) {
                console.warn('Icon not found, could not find icon with name: ', icon)
                return null
            }
        } else {
            return null
        }
    }, [icon])

    const iconContent = IconCompoennt ? (
        <IconCompoennt
            fill={color}
            width={width}
            height={height}
            {...filteredProps}
        />
    ) : (
        null
    )

    const classNameValue = classNames({
        'fluffy-icon': true,
        [className || '']: true
    })

    return (
        <Styled.Span
            style={style}
            $size={size}
            className={classNameValue}
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {iconContent}
        </Styled.Span>
    )
}

export default Icon
