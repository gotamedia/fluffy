import { css } from "styled-components"

const checkmark = {
    before: css`
        width: 40%;
        height: 8%;
        right: 55%;
        bottom: 20%;
        transform: rotate(45deg);
        transform-origin: right bottom;
    `,
    after: css`
        width: 8%;
        height: 70%;
        right: 54%;
        bottom: 20%;
        transform: rotate(35deg);
        transform-origin: right bottom;
    `
}

const indeterminate = {
    before: css`
        width: 62%;
        height: 2px;
        margin: 45% 20%;
    `,
    after: css`

    `
}

const checkedShapes = {
    checkmark: checkmark,
    indeterminate: indeterminate
}

export default checkedShapes