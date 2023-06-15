import { css } from "styled-components"

const defaultState = {
    border: css`
    
    `,
    wrapper: css`

    `
}

const error = {
    border: css`
        && {
            background-color: #FF0000;
        }
    `,
    wrapper: css`
        && {
            color: #FF0000;
            border-color: #FF0000;
            background-color: #FFF5F5;
        }
    `
}

const states = {
    default: defaultState,
    error: error
}

export default states