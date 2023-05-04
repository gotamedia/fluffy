import styled, { css } from 'styled-components'

import { tint } from 'polished'

import CheckboxComponent from '@components/Checkbox'
import IconComponent from '@components/Icon'

import type * as Types from './types'

const InnerWrapper = styled.div`
    flex: 1;
    display: flex;
    position: relative;
`

const Checkbox = styled(CheckboxComponent)`
    margin: 8px 0 auto 8px;
`

const Icon = styled(IconComponent)`
    padding: 12px 0 8px 8px;

    &:last-child {
        padding: 12px 8px 8px 0px;
    }
`

const ActionIcon = styled(IconComponent)`
    display: flex;
    padding: 12px;

    svg {
        margin: auto;
    }
    
    &:hover {
        background-color: #E9E9E8;
    }
`

const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 0;
    padding: 8px;
    flex-direction: column;
`

const Text = styled.p`
    margin: 0;
    font-size: 14px;
    line-height: 18px;
    padding-top: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

const SubText = styled.p`
    margin: 0;
    color: #8A8A8D;
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

const Wrapper = styled.div<{ $targeted?: Types.ListItemProps['targeted'] }>`
    width: 100%;
    min-height: 40px;
    padding: 0;
    display: flex;
    flex-direction: column;
    outline: none;

    &:hover {
        ${({ $targeted }) => !$targeted && css`
            cursor: pointer;
            background-color: #F5F5F5;
        `}
    }

    ${({ $targeted }) => $targeted && css`
        cursor: default;
        background-color: ${({ theme }) => tint(0.1, theme.colors.brand)};

        ${ActionIcon} {
            &:not(:hover) {
                color: white;
                fill: white;
            }
        }

        ${Icon} {
            color: white;
            fill: white;
        }

        ${Text} {
            color: white;
        }

        ${SubText} {
            color: white;
        }
    `};
`

export {
    Wrapper,
    InnerWrapper,
    Checkbox,
    Icon,
    ActionIcon,
    TextWrapper,
    Text,
    SubText
}