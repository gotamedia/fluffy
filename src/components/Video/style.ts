import styled from 'styled-components'
import { darken, transparentize } from 'polished'

import { Icons } from '@components/Icon'

import IconButton, {
    IconButtonShapes,
    IconButtonSizes,
    IconButtonVariants
} from '@components/IconButton'

const Wrapper = styled.div`
    position: relative;
    width: 720px;
    height: 405px;
    display: flex;
    flex-direction: column;
`

const ControlsWrapper = styled.div`
    position: absolute;
    bottom: 20px;
    width: 85%;
    left: 50%;
    transform: translate(-50%, 0);
    height: 35px;
    border-radius: 7px;
    background-color: ${({ theme }) => transparentize(0.25, theme.colors.brand)};
    display: flex;
    transition: opacity 500ms;
    opacity: ${({ $hide }) => $hide ? 0 : 1};
`

const PlayButton = styled(IconButton).attrs<{ $isPlaying: boolean }>(({ $isPlaying }) => {
    return {
        icon: $isPlaying ? Icons.Pause : Icons.Play,
        size: IconButtonSizes.Tiny,
        shape: IconButtonShapes.Circle,
        variant: IconButtonVariants.Secondary
    }
})`
    margin: auto auto auto 10px;
`

const TimeControlsWrapper = styled.div`
    width: 100%;
    display: flex;
    margin: auto 30px;
`

const CurrentTime = styled.p`
    color: white;
    font-size: 12px;
    min-width: 32px;
    margin: auto auto auto 0;
`

const ProgressBar = styled.input.attrs(() => {
    return {
        type: 'range'
    }
})`
    height: 5px;
    width: 100%;
    margin: auto 20px;
    border-radius: 5px;
    background: transparent;
    -webkit-appearance: none;

    &:focus {
       outline: none;
    }

    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        background: ${({ theme }) => darken(0.2, theme.colors.brand)};
        border: none;
        box-shadow: none;
        margin-top: -6px;
    }

    &::-webkit-slider-runnable-track {
        -webkit-appearance: none;
        height: 5px;
        box-shadow: none;
        border-radius: 5px;
        
        background: linear-gradient(
            to right,
            ${({ theme }) => darken(0.2, theme.colors.brand)},
            ${({ theme }) => darken(0.2, theme.colors.brand)} ${({ value }) => value}%,
            ${({ theme }) => transparentize(0.25, theme.colors.brand)} ${({ value }) => value}%
        );
    }
`

const TotalTime = styled.p`
    color: white;
    font-size: 12px;
    min-width: 32px;
    margin: auto 0 auto auto;
`

const MuteButton = styled(IconButton).attrs<{ $isMuted: boolean }>(({ $isMuted }) => {
    return {
        icon: $isMuted ? Icons.EyeStrikethrough : Icons.Eye,
        size: IconButtonSizes.Tiny,
        shape: IconButtonShapes.Circle,
        variant: IconButtonVariants.Secondary
    }
})`
    margin: auto 10px auto auto;
`

const FullscreenButton = styled(IconButton).attrs(() => {
    return {
        icon: Icons.Enlarge,
        size: IconButtonSizes.Tiny,
        shape: IconButtonShapes.Circle,
        variant: IconButtonVariants.Secondary
    }
})`
    margin: auto 10px auto 0;
`

export {
    Wrapper,
    ControlsWrapper,
    PlayButton,
    TimeControlsWrapper,
    CurrentTime,
    ProgressBar,
    TotalTime,
    MuteButton,
    FullscreenButton
}