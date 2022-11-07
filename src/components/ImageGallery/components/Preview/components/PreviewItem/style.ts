import styled, { css } from 'styled-components'

const Wrapper = styled.div<{ $active: boolean }>`
    width: 65px;
    height: 65px;
    min-width: 65px;
    min-height: 65px;
    max-width: 65px;
    max-height: 65px;
    position: relative;
    display: flex;
    margin: auto 10px;

    * {
        margin: auto;
    }

    ${({ $active }) => $active && css`
        box-shadow: white 0px 0px 0px 2px, #2E2A25 0px 0px 0px 4px;
    `}
`

export {
    Wrapper
}