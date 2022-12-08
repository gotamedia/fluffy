import styled, { css } from "styled-components"

import FocusTrap from '@components/FocusTrap'

import * as Types from "./types"

const pointerBottomStyleFn: Types.AnchorStyleFn = ({
    $pointer,
    $pointerWidth = 20,
    $pointerHeight = 10,
    $backgroundColor = "white",
}) => $pointer.canExtendBottom && css`
    margin-top: ${$pointerHeight}px;

    &::before {
        border-bottom-color: ${$backgroundColor};
        border-width: 0 ${$pointerWidth * 0.5}px ${$pointerHeight}px;
        top: ${-1 * ($pointerWidth - $pointerHeight)}px;
        right: ${$pointer.canExtendLeft && "10px"};
        left: ${$pointer.canExtendRight && "10px"};
    }
`

const pointerTopStyleFn: Types.AnchorStyleFn = ({
    $pointer,
    $pointerWidth = 20,
    $pointerHeight = 10,
    $backgroundColor = "white"
}) => $pointer.canExtendTop && css`
    margin-bottom: ${$pointerHeight}px;

    &::after {
        border-width: ${$pointerHeight}px ${$pointerWidth * 0.5}px 0;
        border-top-color: ${$backgroundColor};
        bottom: ${-1 * ($pointerWidth - $pointerHeight)}px;
        right: ${$pointer.canExtendLeft && "10px"};
        left: ${$pointer.canExtendRight && "10px"};
    }
`

const pointerStyleFn: Types.AnchorStyleFn = ({
    $pointer,
    $backgroundColor = "white"
}) => [
        $pointer.canExtendTop,
        $pointer.canExtendBottom,
        $pointer.canExtendLeft,
        $pointer.canExtendRight
    ].includes(true) && css`
        display: block;
        background-color: ${$backgroundColor};

        &::before,
        &::after {
            width: 0;
            height: 0;
            position: absolute;
            display: block;
            content: "";
            border-color: transparent;
            border-style: solid;
        }
`

const anchorStyleFn: Types.AnchorStyleFn = ({
    theme,
    $backgroundColor = "white"
}) => css`
        z-index: 1000;
        outline: none;
        display: flex;
        flex-direction: column;
        position: fixed;
        border: 1px solid ${$backgroundColor};
        background-color: ${$backgroundColor};
        border-radius: ${theme.borders.radius[0]};
        filter: drop-shadow(${theme.filterShadows[0]});
`

const Anchor = styled.div<Types.AnchorStyledProps>`
    ${anchorStyleFn}
    ${pointerStyleFn}
    ${pointerTopStyleFn}
    ${pointerBottomStyleFn}
`

const AnchorWithFocusTrap = styled(FocusTrap)<Types.AnchorStyledProps>`
    ${anchorStyleFn}
    ${pointerStyleFn}
    ${pointerTopStyleFn}
    ${pointerBottomStyleFn}
`

export { Anchor, AnchorWithFocusTrap }
