import { css } from "styled-components"

import { shade } from 'polished'

const defaultState = {
    checkbox: css`
    
    `,
    label: css`
    
    `
}

const error = {
    checkbox: css`
        && {
            border-color: #FF0000;
            
            &:not(:checked) {
                background-color: #FFF5F5;

                &:before {
                    background-color: #FFF5F5;
                }

                &:after {
                    background-color: #FFF5F5;
                }

                &:hover {
                    background-color: ${shade(0.08, "#FFF5F5")};

                    &:before {
                        background-color: ${shade(0.08, "#FFF5F5")};
                    }

                    &:after {
                        background-color: ${shade(0.08, "#FFF5F5")};
                    }
                }
            }
        }
    `,
    label: css`
        color: #FF0000;
    `
}

const states = {
    default: defaultState,
    error: error
}

export default states