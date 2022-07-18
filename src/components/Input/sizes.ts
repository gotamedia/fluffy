import { css } from 'styled-components'

const tiny = css`
    height: 24px;
    min-width: 300px;
    font-size: 14px;
    padding: 0px 8px;
`

const small = css`
    height: 32px;
    min-width: 300px;
    font-size: 15px;
    padding: 0px 8px;
`

const normal = css`
    height: 40px;
    min-width: 300px;
    font-size: 16px;
    padding: 0px 10px;
`

const big = css`
    height: 48px;
    min-width: 300px;
    font-size: 18px;
    padding: 0px 16px;
`

const huge = css`
    height: 50px;
    min-width: 300px;
    font-size: 22px;
    padding: 0px 18px;
`

const sizes = {
    tiny,
    small,
    normal,
    big,
    huge
}

export default sizes