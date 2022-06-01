import { css } from 'styled-components'

import { Title } from './components/CardTitle/style'
import { Headline } from './components/CardHeadline/style'
import { Wrapper as ImageWrapper } from './components/CardImage/style'
import { Wrapper as Skeleton } from '@components/Skeleton/style'

const small = css`
    ${Title} {
        font-size: 13px;

        ${Skeleton} {
            min-height: 17px
        }
    }

    ${Headline} {
        font-size: 24px;

        ${Skeleton} {
            min-height: 24px
        }
    }

    ${ImageWrapper} {
        width: 150px;
    }
`

const normal = css`
    ${Title} {
        font-size: 16px;

        ${Skeleton} {
            min-height: 20px
        }
    }
    
    ${Headline} {
        font-size: 28px;

        ${Skeleton} {
            min-height: 30px
        }
    }

    ${ImageWrapper} {
        width: 200px;
    }
`

const big = css`
    ${Title} {
        font-size: 18px;

        ${Skeleton} {
            min-height: 22px
        }
    }

    ${Headline} {
        font-size: 36px;

        ${Skeleton} {
            min-height: 36px
        }
    }

    ${ImageWrapper} {
        width: 300px;
    }
`

export {
    small,
    normal,
    big
}