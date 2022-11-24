import { SliderDirections } from "@root/components/Slider/types"
import styled, { css } from "styled-components"
import * as Types from "./types"

const horizontalStyle: Types.BulletsStyleFn = ({ $direction }) =>
    $direction === SliderDirections.Horizontal &&
    css`
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    `

const verticlalStyle: Types.BulletsStyleFn = ({ $direction }) =>
    $direction === SliderDirections.Vertical &&
    css`
        flex-direction: column;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
    `

const Wrapper = styled.div`
    display: flex;
    grid-gap: 4px;
    position: absolute;
    z-index: 10;
    ${horizontalStyle}
    ${verticlalStyle}
`

export { Wrapper }
