import {
    FC,
    useEffect,
    useState
} from 'react'

import * as Icons from '../icons'

import * as Styled from './style'
import * as Types from './types'

const Icon: FC<Types.IconProps> = (props) => {
    const {
        icon,
        className,
        style,
        ariaLabel,
        onClick,
        color,
        width,
        height,
        size,
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
                console.warn('Icon not found, could not find icon with name: ', name)
            }
        }
    }, [icon])

    const iconSize: Types.IconSizes = size ? size : (height || Types.IconSizes.Default) as Types.IconSizes

    const iconContent = IconCompoennt ? (
        <IconCompoennt
            fill={color}
            width={width}
            height={iconSize}
            {...filteredProps}
        />
    ) : (
        null
    )

    return (
        <Styled.Span
            style={style}
            className={className}
            aria-label={ariaLabel}
            onClick={onClick}
        >
            {iconContent}
        </Styled.Span>
    )
}

export default Icon
