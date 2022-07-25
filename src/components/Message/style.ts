import { StyledMessageProps } from "@components/Message/types"
import styled from "styled-components"
import * as Variants from "./variants"

const Wrapper = styled.div<StyledMessageProps>`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    padding: 12px;
    text-align: center;
    gap: 12px;
    box-sizing: border-box;
    ${Variants.type};
`

const Headline = styled.h1`
    font-family: ${({ theme }) => theme.fonts.generic[5]};
    margin: 0;
    padding: 0;

    font-weight: bold;
    font-size: 16px;
    line-height: 20px;

    color: ${({ theme }) => theme.colors.grey[0]};
`

const Text = styled.p`
    font-family: ${({ theme }) => theme.fonts.generic[5]};
    margin: 0;

    font-size: 14px;
    line-height: 18px;

    color: ${({ theme }) => theme.colors.grey[0]};
`

export {
    Wrapper,
    Headline,
    Text
}
