import styled, { css } from 'styled-components'

import { ImageLoadingEffects } from './types'

import * as Types from './types'

const Wrapper = styled.div`
    position: relative;
`

const imageStyle = css`
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
`

const Image = styled.img<
{
    $isLoaded: boolean,
    $transitionDuration: Types.LazyImageProps['transitionDuration']
}>`
    ${imageStyle};

    ${({ $isLoaded, $transitionDuration }) => $isLoaded && css`
        opacity: 1;

        ${$transitionDuration && $transitionDuration > 0 && css`
            transition: opacity ${$transitionDuration}s ease-out;
        `}
    `}
`

const Thumbnail = styled.img<
{
    $isLoaded: boolean,
    $loadingEffect: Types.LazyImageProps['loadingEffect'],
    $transitionDuration: Types.LazyImageProps['transitionDuration']
}>`
    ${imageStyle};

    opacity: 1;

    ${({ $loadingEffect }) => $loadingEffect === ImageLoadingEffects.Blur && css`
        filter: blur(10px);
    `}

    ${({ $transitionDuration }) => $transitionDuration && $transitionDuration > 0 && css`
        transition: opacity ${$transitionDuration}s ease-out;
    `}

    ${({ $isLoaded }) => $isLoaded && css`
        opacity: 0;
    `}
`

export {
    Wrapper,
    Image,
    Thumbnail
}