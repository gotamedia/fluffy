import { css } from 'styled-components'

const tiny = css`
    width: 18px;
    height: 18px;

    &:before {
        width: 10px;
        height: 10px;
    }
`

const small = css`
    width: 20px;
    height: 20px;

    &:before {
        width: 12px;
        height: 12px;
    }
`

const normal = css`
    width: 22px;
    height: 22px;

    &:before {
        width: 14px;
        height: 14px;
    }
`

const big = css`
    width: 24px;
    height: 24px;

    &:before {
        width: 16px;
        height: 16px;
    }
`

const huge = css`
    width: 26px;
    height: 26px;

    &:before {
        width: 18px;
        height: 18px;
    }
`

const sizes = {
    tiny,
    small,
    normal,
    big,
    huge
}

export default sizes