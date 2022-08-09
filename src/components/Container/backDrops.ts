import { css } from 'styled-components'

const light = css`
    box-shadow: ${({ theme }) => theme.boxShadows[2]};
`

const medium = css`
    box-shadow: ${({ theme }) => theme.boxShadows[3]};
`

const strong = css`
    box-shadow: ${({ theme }) => theme.boxShadows[4]};
`

const none = css`

`

const backdrops = {
    light,
    medium,
    strong,
    none
}

export default backdrops