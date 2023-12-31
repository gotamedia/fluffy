import styled, { css } from 'styled-components'

import { pillShapes } from "./shapes"
import * as variants from './variants'
import * as Types from "./types"

// TODO: Fix colors / theme
const basePillStyle = css`
    display: flex;
    flex-direction: row;
    justify-content: center; 
    align-items: center; 
    border: 1px solid; 
    border-radius: 3px; 
    padding: 0px 5px;
    height: 16px;
    font-size: ${({ theme }) => theme.fontSizes[0]}px;
    font-family: ${({ theme }) => theme.fonts.generic[1]};
`

const Pill = styled.div<Types.PillStyledProps>`
    ${basePillStyle};
    ${pillShapes};
    ${({ $variant }) => variants[$variant || 'alert']};
`


export {
    Pill
}