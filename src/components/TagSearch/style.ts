import styled, { css } from 'styled-components'

import { tint } from 'polished'

import Icon, { Icons } from '../Icon'
import Container from '../Container'
import InputComponent from '../Input'
import InputGroupComponent from '../InputGroup'
import PopoverComponent from '../Popover'

const Wrapper = styled.div<{ $disabled?: boolean }>`
    display: inline-flex;
    position: relative;
    outline: none;
    padding: 0 6px;
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
    margin: auto 0px auto 3px;
`

const ArrowIcon = styled(Icon).attrs(() => {
    return {
        icon: Icons.ArrowDown
    }
})`
    margin: auto 3px auto 0px;
`

const Popover = styled(PopoverComponent)`
    box-shadow: 0px 2px 15px rgb(0 0 0 / 20%);
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding-top: 1px;
`

const InnerWrapper = styled(Container)`
    min-height: 40px;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const TagsElements = styled.div`
    padding: 5px 10px;
    display: flex;
    gap: 5px;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
`

const TagsWrapper = styled.div<{ $asInput: boolean }>`
    position: relative;
    width: 100%;
    margin: auto 0;
    min-height: 40px;
    display: flex;
    background-color: ${({ theme }) => tint(0.93, theme.colors.brand)};

    ${({ $asInput }) => $asInput && css`
        overflow: hidden;
        background-color: unset;

        ${TagsElements} {
            overflow: hidden;
            flex-wrap: nowrap;
        }
        
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

const ListWrapper = styled.div`
    flex: 1;
    overflow: auto;
`

export {
    Wrapper,
    ElementsWrapper,
    SearchIcon,
    ArrowIcon,
    InnerWrapper,
    TagsWrapper,
    TagsElements,
    InputGroup,
    Input,
    Popover,
    ListWrapper
}