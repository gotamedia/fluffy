import {
    useEffect,
    useState
} from 'react'

import * as Icons from '@root/icons'

import * as Styled from './style'
import * as Types from './types'
import type { FC } from 'react'

const Icon: FC<Types.IconProps> = (props) => {
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

    const [IconCompoennt, setIconCompoennt] = useState<Types.IconComponent>()

    useEffect(() => {
        if (icon) {            
            try {
                const iconComonent = Icons[icon] as Types.IconComponent

                if (iconComonent) {
                    setIconCompoennt(() => iconComonent)
                }
            } catch(error) {
                console.warn('Icon not found, could not find icon with name: ', icon)
            }
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

    return (
        <Styled.Span
            style={style}
            $size={size}
            className={`fluffy-icon ${className ? className : ''}`}
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {iconContent}
        </Styled.Span>
    )
}

export default Icon
