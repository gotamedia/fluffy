import { tint } from 'polished'

import { ImageLoadingEffects } from './components/LazyImage/types'

import type { ThemeStyleItem } from '@root/types'

export type ImageThemeType = {
    style: {
        root: ThemeStyleItem,
        lazy: {
            root: ThemeStyleItem,
            image: ThemeStyleItem,
            thumbnail: ThemeStyleItem,
            placeholder: ThemeStyleItem
        }
    }
}

const ImageTheme: ImageThemeType = {
    style: {
        root: {},
        lazy: {
            root: {
                position: 'relative'
            },
            image: ({ $componentState }) => ({
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: $componentState?.isLoaded ? 1 : 0,
                transition: $componentState?.isLoaded && ($componentState?.transitionDuration as number) > 0 ? (
                    `opacity ${$componentState.transitionDuration}s ease-out`
                ) : (
                    'unset'
                )
            }),
            thumbnail: ({ $componentState }) => ({
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: $componentState?.isLoaded ? 0 : 1,
                transition: $componentState?.transitionDuration as number > 0 ? (
                    `opacity ${$componentState?.transitionDuration}s ease-out`
                ) : (
                    'unset'
                ),
                filter: $componentState?.loadingEffect === ImageLoadingEffects.Blur ? (
                    'blur(10px)'
                ) : (
                    'unset'
                )
            }),
            placeholder: ({ theme, $componentState }) => ({
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: $componentState?.isLoaded ? 0 : 1,
                transition: $componentState?.transitionDuration as number > 0 ? (
                    `opacity ${$componentState?.transitionDuration}s ease-out`
                ) : (
                    'unset'
                ),
                filter: $componentState?.loadingEffect === ImageLoadingEffects.Blur ? (
                    'blur(10px)'
                ) : (
                    'unset'
                ),
                backgroundColor: tint(0.5, theme.colors.brand)
            })
        }
    }
}

export default ImageTheme