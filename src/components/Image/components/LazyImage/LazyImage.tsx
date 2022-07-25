import {
    forwardRef,
    useState,
    useCallback,
    isValidElement
} from 'react'

import { useInView } from 'react-intersection-observer'

//@ts-ignore
import placeholderImage from './placeholder.png'

import * as Styled from './style'
import type * as Types from './types'
import type { ReactEventHandler } from 'react'

const LazyImage: Types.LazyImageComponent = forwardRef((props, ref) => {
    const {
        thumbnail,
        thumbnailSrc,
        withPlaceholder = true,
        observerOptions = {},
        loadingEffect = 'blur',
        transitionDuration = 1,
        onLoad,
        width,
        height,
        ...filteredProps
    } = props

    const [inViewRef, isInView] = useInView({
        triggerOnce: true,
        rootMargin: '100px 0px',
        ...observerOptions
    })

    const [isLoaded, setIsLoaded] = useState(false)
    const [renderPlaceHolder, setRenderPlaceHolder] = useState(true)

    const handleOnLoad = useCallback<ReactEventHandler<HTMLImageElement>>((event) => {
        setIsLoaded(true)

        if (typeof onLoad === 'function') {
            onLoad(event)
        }
    }, [onLoad])

    const handleOnTransitionEnd = useCallback(() => {
        setRenderPlaceHolder(false)
    }, [])

    return (
        <Styled.Wrapper
            style={{
                width: width,
                height: height
            }}
            ref={inViewRef}
        >
            {
                isInView ? (
                    <>
                        {
                            withPlaceholder && renderPlaceHolder ? (
                                thumbnail && isValidElement(thumbnail) ? (
                                    thumbnail
                                ) : (
                                    <Styled.Thumbnail
                                        {...filteredProps}
                                        $isLoaded={isLoaded}
                                        $loadingEffect={loadingEffect}
                                        $transitionDuration={transitionDuration}
                                        ref={ref}
                                        src={thumbnailSrc || placeholderImage}
                                    />
                                )
                            ) : (
                                null
                            )
                        }

                        <Styled.Image
                            {...filteredProps}
                            $isLoaded={isLoaded}
                            $transitionDuration={transitionDuration}
                            ref={ref}
                            onLoad={handleOnLoad}
                            onTransitionEnd={handleOnTransitionEnd}
                        />
                    </>
                ) : (
                    null
                )
            }
        </Styled.Wrapper>
    )
})

LazyImage.displayName = 'LazyImage'

export default LazyImage