import { StyledTextProps } from "./types"
import styled from "styled-components"
import * as Variants from "./variants"

const Text = styled.input<StyledTextProps>`
    display: inline-flex;
    appearance: none;
    align-items: center;
    justify-content: center;
    position: relative;
    white-space: nowrap;
    outline: transparent solid 2px;
    outline-offset: 2px;
    width: auto;
    line-height: 1.2;
    border-radius: 6px;
    font-weight: normal;
    border-width: 0;
    border-style: solid;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    height: 40px;
    font-size: 16px;
    padding: 0px 16px;
    ${Variants.validationType}

    &:active {
        box-shadow: rgb(0 0 0 / 25%) 0 0 2px 1px;
    }

    &:disabled {
        cursor: not-allowed;
        box-shadow: none;
        background-color: #eeeeee;
        border: none;
        color: #aaaaaa;
    }
    
    &:read-only {
        border-color: #333333;
        box-shadow: none;
        background-color: #eeeeee;
        color: #aaaaaa;
    }
`

export {
    Text
}
