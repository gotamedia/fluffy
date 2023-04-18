import { css } from 'styled-components'

const tiny = css`
    height: 24px;
    width: 200px;
    font-size: 12px;
`

const small = css`
    height: 32px;
    width: 200px;
    font-size: 14px;
`

const normal = css`
    height: 40px;
    width: 200px;
    font-size: 16px;
`

const big = css`
    height: 48px;
    width: 200px;
    font-size: 18px;
`

const huge = css`
    height: 50px;
    width: 200px;
    font-size: 20px;
`

const sizes = {
    tiny,
    small,
    normal,
    big,
    huge
}

export default sizes