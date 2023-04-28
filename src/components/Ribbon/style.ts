import * as Types from "./types"

import styled, { css } from "styled-components"
import { Polished } from "@root/index"

const Wrapper = styled.div<Pick<Types.RibbonProps, "side" | "top">>`
    position: absolute;
    ${({ side }) => `${side}: 0`};
    top: ${({ top }) => (typeof top === "number" ? `${top}px` : top)};
    width: 100%;
`

const Ribbon = styled.div<Pick<Types.RibbonProps, "background" | "color" | "fold" | "side">>`
    position: absolute;
    ${({ side }) => `${side}: 0`};
    background: ${({ background }) => background};
    color: ${({ color }) => color};
    padding: ${({ theme }) => `${theme.space[4]}px ${theme.space[8]}px`};
    font-size: ${({ theme }) => `${theme.fontSizes[2]}px`};
    line-height: ${({ theme }) => `${theme.lineHeights[2]}px`};
    font-family: ${({ theme }) => theme.fonts.generic[2]};
    border-radius: ${({ side, theme }) => (side === "left"
        ? `0 ${theme.space[1]}px ${theme.space[1]}px 0`
        : `${theme.space[1]}px 0 0 ${theme.space[1]}px`
    )};

    ${({ fold, side, theme }) => (!fold ? "" : css`
        margin-${side}: -${theme.space[4]}px;
        padding-${side}: ${theme.space[7] + theme.space[4]}px;
    `)}
`

// rotate 360° optimizes the antialiasing
const Fold = styled.div<Pick<Types.RibbonProps, "background" | "fold" | "foldColor" | "side">>`
    position: absolute;
    transform: rotate(360deg);
    ${({ side }) => `${side}: 0`};
    ${({ fold, theme }) => `${fold === "up" ? "top" : "bottom"}: -${theme.space[3]}px`};
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${({ fold, side, theme }) => [
        side === "right" ? `${theme.space[3]}px` : "0",
        fold === "down" ? `${theme.space[4]}px` : "0",
        side === "left" ? `${theme.space[3]}px` : "0",
        fold === "up" ? `${theme.space[4]}px` : "0"
    ].join(" ")};
    border-color: ${({ background, fold, foldColor, side }) => {
        const combinedFoldColor = foldColor || Polished.darken(0.2, background)
        return [
            fold === "down" && side === "right" ? combinedFoldColor : "transparent",
            fold === "down" && side === "left" ? combinedFoldColor : "transparent",
            fold === "up" && side === "left" ? combinedFoldColor : "transparent",
            fold === "up" && side === "right" ? combinedFoldColor : "transparent"
        ].join(" ")
    }};
`

export {
    Fold,
    Ribbon,
    Wrapper
}
