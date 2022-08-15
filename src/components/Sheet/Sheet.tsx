import {
    forwardRef,
    useRef,
    useState,
    useMemo,
    useCallback,
    useEffect,
    useImperativeHandle
} from 'react'

import {
    animate,
    toDecimal
} from "popmotion"

import { SheetDirections } from './types'

import useIsomorphicLayoutEffect from '@hooks/useIsomorphicLayoutEffect'

import * as Styled from './style'
import type * as Types from './types'

const Sheet: Types.SheetComponent = forwardRef((props, ref) => {
    const {
        children,
        parentRef,
        duration = 300,
        direction = 'bottom',
        openOnMount = true,
        forceRender = false,
        ...DOMProps
    } = props

    const wrapperRef = useRef<HTMLDivElement>(null)

    const [displayContent, setDisplayContent] = useState(forceRender)
    const [sheetRect, setSheetRect] = useState<{ width?: number, height?: number }>({ width: undefined, height: undefined })

    useIsomorphicLayoutEffect(() => {
        const calculateSheetRect = () => {
            let rect
    
            if (parentRef && parentRef.current) {
                rect = {
                    width: toDecimal(parentRef.current.offsetWidth),
                    height: toDecimal(parentRef.current.offsetHeight)
                }
            } else if (wrapperRef.current) {
                rect = {
                    // @ts-ignore
                    width: toDecimal(wrapperRef.current.parentNode?.['offsetWidth']),
                    // @ts-ignore
                    height: toDecimal(wrapperRef.current.parentNode?.['offsetHeight'])
                }
            }
    
            if (rect) {
                setSheetRect(rect)
            }
        }

        calculateSheetRect()
    }, [parentRef])

    const animationParams = useMemo(() => {
        let dimensionValue: number | null = null

        switch(direction) {
            case SheetDirections.Left:
            case SheetDirections.Right:
                dimensionValue = sheetRect.width || null
                break

            default:
            case SheetDirections.Top:
            case SheetDirections.Bottom:
                dimensionValue = sheetRect.height || null
                break
        }

        const params = {
            key: direction,
            value: dimensionValue
        }

        return params
    }, [
        direction,
        sheetRect.height,
        sheetRect.width
    ])

    const updateSheet = useCallback((key: string, value: number | null) => {
        if (wrapperRef.current && typeof value === 'number') {
            wrapperRef.current.style[key as any] = `${toDecimal(value)}px`
        }
    }, [])

    const openSheet = useCallback(() => {
        setDisplayContent(true)

        animate({
            from: animationParams.value,
            to: 0,
            duration: duration,
            onPlay: () => {
                if (wrapperRef.current) {
                    wrapperRef.current.style.opacity = '1'
                }
            },
            onUpdate: (latest) => {
                updateSheet(animationParams.key, latest)
            }
        })
    }, [
        duration,
        animationParams,
        updateSheet
    ])

    const closeSheet = useCallback(() => {
        animate({
            from: 0,
            to: animationParams.value,
            duration: duration,
            onUpdate: (latest) => {
                updateSheet(animationParams.key, latest)
            },
            onStop: () => {
                if (!forceRender) {
                    setDisplayContent(false)
                }

                if (wrapperRef.current) {
                    wrapperRef.current.style.opacity = '0'
                }
            }
        })
    }, [
        duration,
        animationParams,
        updateSheet,
        forceRender
    ])

    useEffect(() => {
        if (openOnMount) {
            openSheet()
        }
    }, [openOnMount, openSheet])

    useImperativeHandle(ref, () => {
        return {
            open: openSheet,
            close: closeSheet
        }
    }, [closeSheet, openSheet])

    return (
        <Styled.Wrapper
            // @ts-ignore
            ref={wrapperRef}
            {...DOMProps}
            style={{
                ...DOMProps?.style,
                width: sheetRect.width,
                height: sheetRect.height,
                opacity: 0,
                [animationParams.key]: animationParams.value
            }}
        >
            {
                displayContent && (
                    children
                )
            }
        </Styled.Wrapper>
    )
})

Sheet.displayName = 'Sheet'

export default Sheet