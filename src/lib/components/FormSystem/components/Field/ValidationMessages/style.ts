import styled from "styled-components"
import { StyledValidationMessageProps } from "./types"
import * as Variants from "./variants"

const ValidationMessage = styled.div<StyledValidationMessageProps>`
    font-size: 12px;
    ${Variants.type};
    
    a,
    a:visited {
        ${Variants.type};
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
`

export {
    ValidationMessage,
    Wrapper
}
