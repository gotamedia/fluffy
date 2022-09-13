import {
    useMemo,
    forwardRef
} from 'react'

import classNames from '@utils/classNames'

import withThemeProps from '@internal/hocs/withThemeProps'

import * as Icons from '@root/icons'

import * as Styled from './style'
import * as Types from './types'

export const Icon: Types.IconComponent = forwardRef((props, ref) => {
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

    const IconCompoennt = useMemo<Types.SVGIconComponent | null>(() => {
        if (icon) {            
            try {
                return Icons[icon] as Types.SVGIconComponent
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
            ref={ref}
            style={style}
            $size={size}
            className={classNameValue}
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {iconContent}
        </Styled.Span>
    )
})

export default withThemeProps(Icon) as Types.IconComponent