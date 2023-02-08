import { SliderDirections } from "@root/components/Slider/types"
import styled, { css } from "styled-components"

import * as Types from "./types"

const rawButton = css`
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
`




const active: Types.BulletStyleFn = ({ active, theme }) =>
    css`
        cursor: pointer;
        opacity: ${active ? 1 : "0.2"};
        background: ${active ? theme.colors.brand : "#000"};
    `

const dynamic: Types.BulletStyleFn = ({left, top, isDynamic,  active, prevBullet, nextBullet}) => 
    isDynamic === true && 
    css`
        position: relative;
        left: ${left}px;
        top: ${top}px;
        transition: .2s transform,.2s left;
        transform: ${active ? "scale(1)" : prevBullet || nextBullet ? "scale(.85)" : "scale(.60)"};
    `


const Bullet = styled.button<Types.BulletStyledProps>`
    ${rawButton}
    display: inline-block;
    white-space: nowrap;
    border-radius: 50%;
    min-width: 8px;
    min-height: 8px;
    margin: ${({ direction }) => direction === SliderDirections.Horizontal ? "0 4px" : "4px 0"};
    ${active}
    ${dynamic}
`

const BulletContainer = styled.div`
    min-height: 12px;
    min-width: 12px;

`

export { Bullet, BulletContainer }
