import styled, { css } from "styled-components"

import FocusTrap from '@components/FocusTrap'

import * as Types from "./types"

const POINTER_WIDTH = 20
const POINTER_HEIGHT = 10

const pointerBottomStyleFn: Types.AnchorStyleFn = ({
    $pointer,
    $pointerColor = "white"
}) => $pointer.canExtendBottom && css`
    margin-top: ${POINTER_HEIGHT}px;

    &::before {
        border-bottom-color: ${$pointerColor};
        border-width: 0 ${POINTER_WIDTH * 0.5}px ${POINTER_HEIGHT}px;
        top: ${-1 * (POINTER_WIDTH - POINTER_HEIGHT)}px;
        right: ${$pointer.canExtendLeft && "10px"};
        left: ${$pointer.canExtendRight && "10px"};
    }
`

const pointerTopStyleFn: Types.AnchorStyleFn = ({
    $pointer,
    $pointerColor = "white",
}) => $pointer.canExtendTop && css`
    margin-bottom: ${POINTER_HEIGHT}px;

    &::after {
        border-width: ${POINTER_HEIGHT}px ${POINTER_WIDTH * 0.5}px 0;
        border-top-color: ${$pointerColor};
        bottom: ${-1 * (POINTER_WIDTH - POINTER_HEIGHT)}px;
        right: ${$pointer.canExtendLeft && "10px"};
        left: ${$pointer.canExtendRight && "10px"};
    }
`

const pointerStyleFn: Types.AnchorStyleFn = ({
    $pointer,
    $pointerColor = "white",
    theme
}) => [
        $pointer.canExtendTop,
        $pointer.canExtendBottom,
        $pointer.canExtendLeft,
        $pointer.canExtendRight
    ].includes(true) && css`
        display: block;
        background-color: ${$pointerColor};
        border-radius: ${theme.borders.radius[0]};
        filter: drop-shadow(${theme.filterShadows[0]});

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

const Anchor = styled.div`
    z-index: 1000;
    outline: none;
    display: flex;
    flex-direction: column;
    position: fixed;
    ${pointerStyleFn}
    ${pointerTopStyleFn}
    ${pointerBottomStyleFn}
`

const AnchorWithFocusTrap = styled(FocusTrap)`
    z-index: 1000;
    outline: none;
    display: flex;
    flex-direction: column;
    position: fixed;
    ${pointerStyleFn}
    ${pointerTopStyleFn}
    ${pointerBottomStyleFn}
`

export { Anchor, AnchorWithFocusTrap }
