import { SliderDirections } from "@root/components/Slider/types"
import styled, { css } from "styled-components"
import * as Types from "./types"

const horizontalDirection: Types.BulletsStyleFn = ({ $direction }) =>
    $direction === SliderDirections.Horizontal &&
    css`
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    `

const verticalDirection: Types.BulletsStyleFn = ({ $direction }) =>
    $direction === SliderDirections.Vertical &&
    css`
        flex-direction: column;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    `

const Wrapper = styled.div`
    display: flex;
    grid-gap: 4px;
    position: absolute;
    z-index: 10;
    ${horizontalDirection}
    ${verticalDirection}
`

export { Wrapper }
