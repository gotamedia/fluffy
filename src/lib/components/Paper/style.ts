import styled, { css } from 'styled-components'

import themeHelpers from '@utils/theme/helpers'

const Wrapper = styled.div`
    width: 100%;
    max-width: 1490px;
    min-height: 110px;
    display: flex;

    background: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.boxShadows[3]};
`

const InnerWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 100px;
    flex-direction: row;

    ${() => themeHelpers.isNotLargeDevice(css`
        padding: 16px;
        flex-direction: column;
    `)};
`

const ImageWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 40px;

    svg {
        width: 95px;
        height: 112px;
    }

    ${() => themeHelpers.isNotLargeDevice(css`
        display: none;
    `)};
`

const Image = styled.img`
    
`

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`

const Headline = styled.h1`
    font-family: ${({ theme }) => theme.fonts.generic[5]};
    margin: 0;
    padding: 0;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    color: ${({ theme }) => theme.colors.grey[0]};
`

const Text = styled.p`
    font-family: ${({ theme }) => theme.fonts.generic[5]};
    margin: 0;
    padding: 0;
    margin-top: 8px;

    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;

    color: ${({ theme }) => theme.colors.grey[0]};
`

const ButtonsWrapper = styled.div`
    display: flex;
    margin: auto 0 auto 40px;

    button {
        margin: auto 0 auto 20px;

        &:first-child {
            margin-left: 0;
        }
    }

    ${() => themeHelpers.isNotLargeDevice(css`
        width: 100%;
        margin-left: 0;
        margin-top: 10px;
        display: inline-block;

        button {
            margin: 0;

            &:not(:first-child) {
                margin-left: 20px;
            }
        }
    `)};
`

export {
    Wrapper,
    InnerWrapper,
    ImageWrapper,
    Image,
    Content,
    Headline,
    Text,
    ButtonsWrapper
}