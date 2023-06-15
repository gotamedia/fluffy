import styled, { css } from 'styled-components'

import IconComponent from '@components/Icon'

import states from './states'

import type * as Types from './types'

const Label = styled.p`
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
    white-space: nowrap;
    font-size: 14px;
    line-height: 18px;
    padding: 11px 4px 11px 8px;
`

const Border = styled.div<{ $state?: Types.StyledSelectTriggerProps['$state']}>`
    min-width: 1px;
    max-width: 1px;
    height: 38px;
    margin: auto 0 auto auto;
    background-color: #DADAD8;

    ${({ $state }) => states[$state || 'default'].border};
`

const Icon = styled(IconComponent)`
    margin: 12px;
`

const Wrapper = styled.div<Types.StyledSelectTriggerProps>`
    min-height: 40px;
    max-height: 40px;
    display: flex;
    border-radius: 2px;
    background-color: #FFFFFF;
    border: 1px solid #DADAD8;
    outline: none;
    box-sizing: border-box;

    &:hover {
        ${({ $disabled }) => !$disabled && css`
            border-color: #B3B2B1;
            background-color: #F5F5F5;
        `}
    }

    &:focus {
        ${({ $disabled }) => !$disabled && css`
            box-shadow: white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px;
        `}
    }

    ${({ $state }) => states[$state || 'default'].wrapper};

    ${({ $disabled }) => $disabled && css`
        && {
            color: #8A8A8D;
            border-color: #B3B2B1;
            background-color: #DADAD8;

            ${Border} {
                background-color: #B3B2B1;
            }
        }
    `}
`

export {
    Wrapper,
    Label,
    Border,
    Icon
}