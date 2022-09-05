import Icon, { Icons, IconSizes, IconType } from "@components/Icon"
import useTheme from "@hooks/useTheme"
import React, { forwardRef } from "react"
import { HintTypes } from "./types"
import * as Types from "./types"
import * as Style from "./style"

const iconMap = new Map<Types.HintTypes, IconType>([
    [Types.HintTypes.Error, Icons.Error],
    [Types.HintTypes.Info, Icons.Hint],
    [Types.HintTypes.Loading, Icons.Loading],
    [Types.HintTypes.Success, Icons.Success],
    [Types.HintTypes.Warning, Icons.Warning]
])

const Hint: Types.HintComponent = forwardRef((props, ref) => {
    const {
        children,
        text,
        type = HintTypes.Error
    } = props

    const theme = useTheme()

    return (
        <Style.Wrapper ref={ref} $type={type} $theme={theme}>
            <Icon
                icon={iconMap.get(type) || Icons.Hint}
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
