import { css } from 'styled-components'

const tiny = css`
    height: 24px;
    min-width: 24px;
    max-width: 24px;
    svg {
        height: 16px;
    }
`

const small = css`
    height: 32px;
    min-width: 32px;
    max-width: 32px;
    svg {
        height: 24px;
    }
`

const normal = css`
    height: 40px;
    min-width: 40px;
    max-width: 40px;
    svg {
        height: 32px;
    }
`

const big = css`
    height: 48px;
    min-width: 48px;
    max-width: 48px;
    svg {
        height: 40px;
    }
`

const huge = css`
    height: 56px;
    min-width: 56px;
    max-width: 56px;
    svg {
        height: 48px;
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