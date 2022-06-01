import { css } from 'styled-components'

import { Headline } from './components/CardHeadline/style'
import { Paragraph } from './components/CardParagraph/style'
import { Wrapper } from './components/CardIconsWrapper/style'

const light = css`
    color: black;
    background-color: white;

    ${Headline} {
        color: black;
    }
    
    ${Paragraph} {
        color: black;
    }

    ${Wrapper} {
        .fluffy-icon {
            fill: black;
        }
    }
`

const dark = css`
    color: black;
    background-color: #1e2a3b;

    ${Headline} {
        color: white;
    }

    ${Paragraph} {
        color: white;
    }

    ${Wrapper} {
        .fluffy-icon {
            fill: white;
        }
    }
`

export {
    light,
    dark
}