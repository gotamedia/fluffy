import { css } from "styled-components"

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