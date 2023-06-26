import { forwardRef } from "react"

import useTheme from "@hooks/useTheme"

import type * as Types from "./types"
import * as Styled from "./style"

const Ribbon: Types.RibbonComponent = forwardRef((props, ref) => {
    const {
        background,
        children,
        color,
        fold,
        foldColor,
        side = "right",
        top,
        ...DOMProps
    } = props

    const theme = useTheme()

    return (
        <Styled.Wrapper
            ref={ref}
            side={side}
            top={top}
            {...DOMProps}
        >
            <Styled.Ribbon
                background={background}
                color={color || theme.colors.grey[0]}
                fold={fold}
                side={side}
            >
                {fold && (
                    <Styled.Fold background={background} foldColor={foldColor} fold={fold} side={side} />
                )}
                {children}
            </Styled.Ribbon>
        </Styled.Wrapper>
    )
})

Ribbon.displayName = 'Ribbon'

export default Ribbon
