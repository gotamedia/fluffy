import styled from "styled-components"

import { StyledHintProps } from "@components/Hint/types"
import * as Variants from "@components/Hint/variants"

const Wrapper = styled.div<StyledHintProps>`
    font-size: 12px;
    ${Variants.type};
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    
    a,
    a:visited {
        ${Variants.type};
    }
    
    .fluffy-icon {
        margin-right: 4px;
    }
    
    svg {
        height: 14px;
        width: auto;
    }
`

export {
    Wrapper
}
