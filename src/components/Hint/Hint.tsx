import { forwardRef } from 'react'

import IconComponent, {
    Icons,
    IconSizes,
    Icon
} from '@components/Icon'

import { HintTypes } from './types'
import * as Style from './style'
import * as Types from './types'

const iconMap = new Map<Types.HintTypes, Icon>([
    [Types.HintTypes.Error, Icons.XCircle],
    [Types.HintTypes.Info, Icons.InformationCircle],
    [Types.HintTypes.Loading, Icons.ArrowPath],
    [Types.HintTypes.Success, Icons.CheckCircle],
    [Types.HintTypes.Warning, Icons.ExclamationCircle]
])

const Hint: Types.HintComponent = forwardRef((props, ref) => {
    const {
        children,
        text,
        type = HintTypes.Error
    } = props

    const icon = iconMap.get(type) || Icons.InformationCircle

    return (
        <Style.Wrapper
            ref={ref}
            $type={type}
        >
            <IconComponent
                icon={icon}
                spin={icon === Icons.ArrowPath}
                size={IconSizes.Tiny}
            />

            {text && (
                <span>{text}</span>
            )}

            {children}
        </Style.Wrapper>
    )
})

Hint.displayName = 'Hint'

export default Hint