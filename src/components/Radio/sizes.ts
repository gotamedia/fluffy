import { css } from 'styled-components'

const tiny = css`
    width: 18px;
    height: 18px;

    &:checked {
        &:before {
            width: 8px;
            height: 8px;
            margin: 5px auto;
        }
    }
`

const small = css`
    width: 20px;
    height: 20px;

    &:checked {
        &:before {
            width: 10px;
            height: 10px;
            margin: 5px auto;
        }
    }
`

const normal = css`
    width: 22px;
    height: 22px;

    &:checked {
        &:before {
            width: 12px;
            height: 12px;
            margin: 5px auto;
        }
    }
`

const big = css`
    width: 24px;
    height: 24px;

    &:checked {
        &:before {
            width: 14px;
            height: 14px;
            margin: 5px auto;
        }
    }
`

const huge = css`
    width: 26px;
    height: 26px;

    &:checked {
        &:before {
            width: 14px;
            height: 14px;
            margin: 6px auto;
        }
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