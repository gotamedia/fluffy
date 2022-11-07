import styled from 'styled-components'

const Wrapper = styled.div<{ $width: string }>`
    position: absolute;
    display: flex;
    background: rgba(85, 86, 90, 0.5);
    overflow: auto;
    padding: 4px 15px;
    flex-direction: row;
    left: 50%;
    bottom: 15px;
    transform: translateX(-50%);
    max-height: 75px;
    min-height: 75px;
    max-width: ${({ $width }) => $width};
`

export {
    Wrapper
}