import styled, { css } from 'styled-components'

import IconComponent from '@components/Icon'

import { Icons } from '@components/Icon'
import { AlertProps } from './types'

const variant = css<{$variant: AlertProps['variant']}>`
    ${({ $variant }) => {
        switch($variant) {
            case 'warning':
                return css`
                    background: #ffeeb3; //FIXME: use theme intead.
                    border-bottom: 4px solid #a17500;  //FIXME: use theme intead.
                `

            default:
            case 'sucess':
                return css`
                    background: #003200; //FIXME: use theme intead.

                    ${Icon} {
                        svg {
                            fill: ${({ theme }) => theme.colors.white};
                        }
                    };

                    ${Headline} {
                        color: ${({ theme }) => theme.colors.white};
                    };

                    ${Text} {
                        color: ${({ theme }) => theme.colors.white};
                    };

                    ${CloseIcon} {
                        svg {
                            fill: ${({ theme }) => theme.colors.white};
                        }
                    };
                `
        }
    }}
`

const Wrapper = styled.div<{$variant: AlertProps['variant']}>`
    ${variant}
`

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px;
    position: relative;

    max-width: 1408px;
    width: 100%;
    align-self: center;
    margin: 0px auto;
    box-sizing: border-box;

    ${({ theme }) => theme.helpers.isSmallDevice(`
        padding: 8px 16px;
    `)};
`

const Icon = styled(IconComponent)`
    width: 24px;
    height: 24px;
    margin: 0 8px auto 0;

    svg {
        width: 24px;
        height: 24px;
    }

    ${({ theme }) => theme.helpers.isSmallDevice(`
        width: 17px;
        height: 17px;
        margin: 0 8px auto 0;

        svg {
            width: 20px;
            height: 20px;
        }
    `)};
`

const TextWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const Headline = styled.h1`
    margin: 0;
    padding: 0;
    margin-bottom: 8px;
    
    font-family: ${({ theme }) => theme.fonts.generic[5]};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    color: ${({ theme }) => theme.colors.grey[0]};
`

const Text = styled.p`
    margin: 0;
    padding: 0;

    &:not(:first-of-type) {
        margin-top: 8px;
    }

    font-family: ${({ theme }) => theme.fonts.generic[5]};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    color: ${({ theme }) => theme.colors.grey[0]};
`

const CloseIcon = styled(IconComponent).attrs(() => {
    return {
        icon: Icons.Cross
    }
})`
    width: 24px;
    height: 24px;
    margin: 0 0 auto 16px;
    cursor: pointer;

    svg {
        width: 24px;
        height: 24px;
    }

    ${({ theme }) => theme.helpers.isSmallDevice(`
        width: 20px;
        height: 20px;
        margin: 0 8px auto 0;

        svg {
            width: 20px;
            height: 20px;
        }
    `)};
`

export {
    Wrapper,
    Content,
    Icon,
    TextWrapper,
    Headline,
    Text,
    CloseIcon
}