import { useRef } from 'react'

const useLazyRef = <Type = unknown>(callback: () => Type) => {
    const ref = useRef<Type>()

    if (ref.current === undefined) {
        ref.current = callback()
    }

    return ref
}

export default useLazyRef