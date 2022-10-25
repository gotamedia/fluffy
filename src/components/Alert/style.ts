import styled, { css } from 'styled-components'

import IconComponent, { Icons } from '@components/Icon'

import themeHelpers from '@utils/theme/helpers'

import * as Types from './types'

const variant = css<{$variant?: Types.AlertProps['variant']}>`
    ${({ $variant }) => {
        switch($variant) {
            case Types.AlertVariants.Warning:
                return css`
                    background: #ffeeb3; //FIXME: use theme intead.
                    border-bottom: 4px solid #a17500;  //FIXME: use theme intead.
                `

            default:
            case Types.AlertVariants.Success:
                return css`
                    background: #003200; //FIXME: use theme intead.

                    ${Icon} {
                        svg {
                            color: ${({ theme }) => theme.colors.white};
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
                            color: ${({ theme }) => theme.colors.white};
                        }
                    };
                `
        }
    }}
`

const Wrapper = styled.div<{$variant?: Types.AlertProps['variant']}>`
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

    ${() => themeHelpers.isSmallDevice(css`
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

    ${() => themeHelpers.isSmallDevice(css`
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
        icon: Icons.XMark
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

    ${() => themeHelpers.isSmallDevice(css`
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