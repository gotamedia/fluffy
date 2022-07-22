import styled, { css } from 'styled-components'

import { StyledSwitchProps } from "./types"
import * as Variants from "./variants"

const Wrapper = styled.label`
    display: flex;
    width: fit-content;
    align-items: center;
    cursor: pointer;
    gap: 8px;
`

const Switch = styled.span`
    position: relative;
    display: inline-block;
    ${Variants.size};
`

const Input = styled.input<StyledSwitchProps>`
    opacity: 0;
    width: 0;
    height: 0;
    ${Variants.invalid};
    
    :checked + span {
        background-color: #2196F3;
    }
    
    :hover + span,
    :focus + span {
        box-shadow: 0 0 3px 3px #2196F3;
    }
`

const Slider = styled.span<StyledSwitchProps>`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
    
    ${({ $invalid }) => $invalid && css`
        box-shadow: 0 0 0 3px red;
    `};
    
    :before {
        position: absolute;
        content: "";
        left: 2px;
        bottom: 2px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
        border-radius: 50%;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
        
        ${({ $invalid }) => $invalid && css`
            background-color: red;
        `};
    }
`

const Text = styled.span<StyledSwitchProps>`
    margin-left: 8px;
`

export {
    Input,
    Slider,
    Switch,
    Text,
    Wrapper
}
