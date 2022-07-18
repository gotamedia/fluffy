import { css } from 'styled-components'

const tiny = css`
    height: 70px;
    min-width: 300px;
    font-size: 14px;
    padding: 8px;
`

const small = css`
    height: 80px;
    min-width: 300px;
    font-size: 15px;
    padding: 12px;
`

const normal = css`
    height: 90px;
    min-width: 300px;
    font-size: 16px;
    padding: 16px;
`

const big = css`
    height: 100px;
    min-width: 325px;
    font-size: 18px;
    padding: 18px;
`

const huge = css`
    height: 120px;
    min-width: 350px;
    font-size: 22px;
    padding: 20px;
`

const sizes = {
    tiny,
    small,
    normal,
    big,
    huge
}

export default sizes