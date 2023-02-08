import { SliderDirections } from "@root/components/Slider/types"
import styled, { css } from "styled-components"
import * as Types from "./types"

const horizontalDirection: Types.BulletsStyleFn = ({ direction }) =>
    direction === SliderDirections.Horizontal &&
    css`
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
    `

const verticalDirection: Types.BulletsStyleFn = ({ direction }) =>
    direction === SliderDirections.Vertical &&
    css`
        flex-direction: column;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
    `

const horizontalDynamic: Types.BulletsStyleFn = ({dynamicBullets, direction}) => 
    dynamicBullets === true && 
    direction === SliderDirections.Horizontal &&
    css`
        position:absolute;
        max-width: 80px;
        overflow: hidden;
    ` 
const verticalDynamic: Types.BulletsStyleFn = ({dynamicBullets, direction}) => 
    dynamicBullets === true && 
    direction === SliderDirections.Vertical &&
    css`
        position:absolute;
        max-height: 80px;
        overflow: hidden;
    ` 

const Wrapper = styled.div`
    display: flex;
    /* grid-gap: 4px; */
    position: absolute;
    z-index: 10;
    text-align: center;
    ${horizontalDirection}
    ${verticalDirection}
    ${horizontalDynamic}
    ${verticalDynamic}
`

export { Wrapper }
