import { css } from 'styled-components'

const tiny = css`
    .input-group_icon {
        margin: auto 6px;
    }

    input {
        &.with-left {
            &-icon {
                padding-left: 35px;
            }
        }
    
        &.with-right {
            &-icon {
                padding-right: 35px;
            }
        }
    }
`

const small = css`
    .input-group_icon {
        margin: auto 8px;
    }

    input {
        &.with-left {
            &-icon {
                padding-left: 46px;
            }
        }
    
        &.with-right {
            &-icon {
                padding-right: 46px;
            }
        }
    }
`

const normal = css`
    .input-group_icon {
        margin: auto 10px;
    }

    input {
        &.with-left {
            &-icon {
                padding-left: 60px;
            }
        }
    
        &.with-right {
            &-icon {
                padding-right: 60px;
            }
        }
    }
`

const big = css`
    .input-group_icon {
        margin: auto 12px;
    }

    input {
        &.with-left {
            &-icon {
                padding-left: 70px;
            }
        }
    
        &.with-right {
            &-icon {
                padding-right: 70px;
            }
        }
    }
`

const huge = css`
    .input-group_icon {
        margin: auto 12px;
    }

    input {
        &.with-left {
            &-icon {
                padding-left: 74px;
            }
        }
    
        &.with-right {
            &-icon {
                padding-right: 74px;
            }
        }
    }
`

export {
    tiny,
    small,
    normal,
    big,
    huge
}