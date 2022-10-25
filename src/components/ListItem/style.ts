import styled, { css } from 'styled-components'

import { tint } from 'polished'

import IconComponent, {
    Icons,
    IconSizes
} from '../Icon'

import types from './typeVariants'
import sizes from './sizes'
import borders from './borders'

import type * as Types from './types'

type InnerWrapperProps = {
    $type?: Types.ListItemProps['type'],
    $hasIcon: boolean,
    $asTitle?: Types.ListItemProps['asTitle']
}

const InnerWrapper = styled.div<InnerWrapperProps>`
    display: flex;
    margin: 0 0 10px 0px;
    padding-right: 30px;
    position: relative;

    ${({ $asTitle }) => $asTitle && css`
        margin: 0 0 8px 0px;
    `};

    ${({ $type }) => types[$type || 'normal']};
`

const Icon = styled(IconComponent).attrs(() => {
    return {
        size: IconSizes.Small
    }
})<{ $isTypeSelect: boolean }>`
    position: absolute;
    left: 10px;

    ${({ $isTypeSelect }) => $isTypeSelect && css`
        left: 40px;
    `}
`

const CheckIcon = styled(IconComponent).attrs(() => {
    return {
        icon: Icons.Check,
        size: IconSizes.Small
    }
})`
    position: absolute;
    left: 10px;
`

const TextWrapper = styled.div`
    width: 100%;
    display: flex;
    margin: 0;
    flex-direction: column;
`

const Text = styled.p`
    margin: 0;
`

const SubText = styled.p`
    margin: 0;
    font-size: 14px;
`

const Border = styled.div<{ $border?: Types.ListItemProps['border'], $type?: Types.ListItemProps['type'] }>`
    height: 1px;
    background-color: lightgray;
    
    ${
        //@ts-ignore
        ({ $border }) => {
            if ($border) {
                return borders[$border]
            }
        }
    };
`

type WrapperProps = {
    $size?: Types.ListItemProps['size'],
    $targeted?: Types.ListItemProps['targeted'],
    $asTitle?: Types.ListItemProps['asTitle']
}

const Wrapper = styled.div<WrapperProps>`
    width: 100%;
    padding: 10px 0 0 0;
    display: flex;
    flex-direction: column;
    outline: none;

    ${({ $size }) => sizes[$size || 'normal']};

    &:hover {
        ${({ $targeted, $asTitle }) => !$asTitle && !$targeted && css`
            cursor: pointer;
            background-color: ${({ theme }) => tint(0.88, theme.colors.brand)};
        `}
    }

    &:last-of-type {
        ${Border} {
            display: none;
        }
    }

    ${({ $targeted }) => $targeted && css`
        cursor: default;
        background-color: ${({ theme }) => tint(0.1, theme.colors.brand)};

        ${CheckIcon} {
            color: white;
            fill: white;
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

    ${({ $asTitle }) => $asTitle && css`
        padding: 8px 0 0 0;

        ${Text} {
            color: gray;
        }
    `}
`

export {
    Wrapper,
    InnerWrapper,
    CheckIcon,
    Icon,
    TextWrapper,
    Text,
    SubText,
    Border
}