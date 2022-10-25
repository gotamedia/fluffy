import Icon, { Icons, IconSizes, IconType } from "@components/Icon"
import useTheme from "@hooks/useTheme"
import React, { forwardRef } from "react"
import { HintTypes } from "./types"
import * as Types from "./types"
import * as Style from "./style"

const iconMap = new Map<Types.HintTypes, IconType>([
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

    const theme = useTheme()
    const icon = iconMap.get(type) || Icons.InformationCircle

    return (
        <Style.Wrapper ref={ref} $type={type} $theme={theme}>
            <Icon
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

export default Hint
