import { BulletSizes } from "@components/Slider/components/Bullets/constants"
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

const clickable: Types.BulletStyleFn = ({ $clickable, $active, theme }) =>
    $clickable &&
    css`
        cursor: pointer;
        opacity: ${$active ? 1 : "0.2"};
        background: ${$active ? theme.colors.brand : "#000"};
    `

const smallSize: Types.BulletStyleFn = ({ $size }) =>
    $size === BulletSizes.Small &&
    css`
        width: 8px;
        height: 8px;
    `

const Bullet = styled.button`
    ${rawButton}
    display: inline-block;
    white-space: nowrap;
    border-radius: 50%;
    ${clickable}
    ${smallSize}
`

export { Bullet }
