import { css } from 'styled-components'

const tiny = css`
    width: 40px;
    height: 20px;
    
    &:before {
        width: 14px;
        height: 14px;
        margin-top: 3px;
        margin-left: 3px;
    }

    &:checked {
        &:before {
            transform: translateX(20px);
        }
    }
`

const small = css`
    width: 44px;
    height: 22px;
    
    &:before {
        width: 16px;
        height: 16px;
        margin-top: 3px;
        margin-left: 3px;
    }

    &:checked {
        &:before {
            transform: translateX(22px);
        }
    }
`

const normal = css`
    width: 48px;
    height: 24px;

    &:before {
        width: 18px;
        height: 18px;
        margin-top: 3px;
        margin-left: 3px;
    }

    &:checked {
        &:before {
            transform: translateX(24px);
        }
    }
`

const big = css`
    width: 52px;
    height: 28px;

    &:before {
        width: 18px;
        height: 18px;
        margin-top: 5px;
        margin-left: 5px;
    }

    &:checked {
        &:before {
            transform: translateX(24px);
        }
    }
`

const huge = css`
    width: 58px;
    height: 30px;

    &:before {
        width: 20px;
        height: 20px;
        margin-top: 5px;
        margin-left: 5px;
    }

    &:checked {
        &:before {
            transform: translateX(28px);
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