import styled, { css } from "styled-components"

const baseFormStyle = css`
    display: flex;
    flex-direction: column;
    font: inherit;
    color: currentColor;
`

const Form = styled.form`
    ${baseFormStyle};
`

export {
    Form
}
