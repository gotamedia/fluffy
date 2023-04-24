import styled, { css } from 'styled-components'

import FluffyPopover from '@components/Popover'
import FluffyList from '@components/List'
import FluffyButton from '@components/Button'

import FluffySelectListItem from './components/SelectListItem'

const Popover = styled(FluffyPopover)`
    filter: unset;
    -webkit-filter: unset;
    background-color: white;
`

const List = styled(FluffyList)<{ $withFooter?: boolean }>`
    overflow: auto;
    border-radius: 2px;
    background-color: white;
    box-shadow: none;
    border: 1px solid #DADAD8;

    ${({ $withFooter }) => $withFooter && css`
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    `}
`

const SelectListItem = styled(FluffySelectListItem)<{ $isNested?: boolean }>`
    width: unset;

    ${({ $isNested }) => $isNested && css`
        padding-left: 30px;
    `}
`

const Footer = styled.div`
    min-height: 56px;
    max-height: 56px;
    display: flex;
    padding: 0px 8px;
    background-color: white;
    border-style: solid;
    border-color: #DADAD8;
    border-width: 0px 1px 1px 1px;
    border-radius: 0 0 2px 2px;
`

const ResetButton = styled(FluffyButton)`
    margin: auto auto auto 0;
`

const ApplyButton = styled(FluffyButton)`
    margin: auto 0 auto auto;
`

export {
    Popover,
    List,
    SelectListItem,
    Footer,
    ResetButton,
    ApplyButton
}