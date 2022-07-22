import { css } from 'styled-components'

const square = css`
    border-width: 0;
    border-style: solid;
    border-radius: 2px;
`

const circle = css`
    border-width: 0;
    border-style: solid;
    border-radius: 50%;
`

const shapes = {
    square,
    circle
}

export default shapes