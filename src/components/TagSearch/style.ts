import styled, { css } from 'styled-components'

import { tint } from 'polished'

import Icon, { Icons } from '../Icon'
import Container from '../Container'
import InputComponent from '../Input'
import InputGroupComponent from '../InputGroup'

const Wrapper = styled.div<{ $disabled?: boolean }>`
    display: inline-flex;
    position: relative;
    outline: none;
    padding: 4px 6px;
    align-items: center;
    width: 100%;
    min-height: 40px;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.brand};
    box-sizing: border-box;

    ${({ $disabled }) => $disabled && css`
        opacity: 0.5;
    `}
`

const ElementsWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
`

const SearchIcon = styled(Icon).attrs(() => {
    return {
        icon: Icons.Search
    }
})`
    margin: auto 10px auto 3px;
`

const ArrowIcon = styled(Icon).attrs(() => {
    return {
        icon: Icons.ArrowDown
    }
})`
    margin: auto 3px auto 10px;
`

const InnerWrapper = styled(Container)`
    min-height: 40px;
    width: 100%;
    overflow: hidden;
`

const TagsWrapper = styled.div<{ $asInput: boolean }>`
    position: relative;
    display: flex;
    flex: 1;
    gap: 5px;
    min-height: 30px;
    justify-content: flex-start;
    align-items: center;
    background-color: ${({ theme }) => tint(0.93, theme.colors.brand)};
    padding: 5px 10px;
    flex-wrap: wrap;

    ${({ $asInput }) => $asInput && css`
        overflow: hidden;
        padding: unset;
        background-color: unset;
        flex-wrap: nowrap;
        
        &:after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: linear-gradient(to right,rgba(255,255,255,0) 0%,rgba(242,242,242,0.17) 80%,rgb(255 255 255) 99%,rgb(255 255 255) 100%);
        }
    `}
`

const InputGroup = styled(InputGroupComponent)`
    width: 100%;
`

const Input = styled(InputComponent)`
    border: 0;
    height: 40px;
    width: 100%;
    outline: none;
    background-color: #ffffff;

    &:hover {
        background-color: #ffffff;
    }

    &:focus {
        box-shadow: none;
    }
`

export {
    Wrapper,
    ElementsWrapper,
    SearchIcon,
    ArrowIcon,
    InnerWrapper,
    TagsWrapper,
    InputGroup,
    Input
}