import { css } from "styled-components"

import { shade } from "polished"

const defaultState = css`

`

const error = css`
    && {
        &:not(:disabled) {
            &::placeholder {
                color: red;
                opacity: 1;
            }
    
            &:-ms-input-placeholder {
                color: red;
            }
    
            &::-ms-input-placeholder {
                color: red;
            }
    
            color: #FF0000;
            border-color: #FF0000;
            background-color: #FFF5F5;
    
            &:hover {
                background-color: ${shade(0.08, "#FFF5F5")};
            }
        }
    }
`

const states = {
    default: defaultState,
    error: error
}

export default states