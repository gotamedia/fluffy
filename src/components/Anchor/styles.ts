import styled, { css } from "styled-components"

import FocusTrap from '@components/FocusTrap'

import * as Types from "./types"

const POINTER_WIDTH = 20
const POINTER_HEIGHT = 10

const pointerBottomStyleFn: Types.AnchorStyleFn = ({
    $pointer,
    $backgroundColor = "white",
}) => $pointer.canExtendBottom && css`
    margin-top: ${POINTER_HEIGHT}px;

    &::before {
        border-bottom-color: ${$backgroundColor};
        border-width: 0 ${POINTER_WIDTH * 0.5}px ${POINTER_HEIGHT}px;
        top: ${-1 * (POINTER_WIDTH - POINTER_HEIGHT)}px;
        right: ${$pointer.canExtendLeft && "10px"};
        left: ${$pointer.canExtendRight && "10px"};
    }
`

const pointerTopStyleFn: Types.AnchorStyleFn = ({
    $pointer,
    $backgroundColor = "white",
}) => $pointer.canExtendTop && css`
    margin-bottom: ${POINTER_HEIGHT}px;

    &::after {
        border-width: ${POINTER_HEIGHT}px ${POINTER_WIDTH * 0.5}px 0;
        border-top-color: ${$backgroundColor};
        bottom: ${-1 * (POINTER_WIDTH - POINTER_HEIGHT)}px;
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
