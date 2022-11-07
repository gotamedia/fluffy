import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    position: relative;
    outline: none;
`

const FullscreenWrapper = styled.div`
    position: fixed;
    inset: 0;
    display: flex;
    background-color: black;

    ${Wrapper} {
        margin: auto;
        width: 100% !important;
        height: 100% !important;
    }
`

export {
    Wrapper,
    FullscreenWrapper
}