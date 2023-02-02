import useLazyRef from '@hooks/useLazyRef'

import * as Styled from './style'
import type * as Types from './types'

const Skeleton: Types.SkeletonComponent = (props) => {
    const {
        rows,
        variant = 'light',
        rowHeight = 22,
        rtl = false,
        ...filteredProps
    } = props

    const elementsRef = useLazyRef(() => {
        let elements = []

        if (typeof rows === 'number') {
            for (let i = 0; i < rows; i++) {
                elements.push(
                    <Styled.Wrapper
                        $variant={variant}
                        key={`skeleton-${i}`}
                        $rtl={rtl}
                        $minHeight={rowHeight}
                        {...filteredProps}
                    />
                )
            }
        } else {
            elements.push(
                <Styled.Wrapper
                    $variant={variant}
                    key={'skeleton'}
                    $rtl={rtl}
                    $minHeight={rowHeight}
                    {...filteredProps}
                />
            )
        }

        return elements
    })

    return (
        <>
            {elementsRef.current?.map(element => element)}
        </>
    )
}

export default Skeleton