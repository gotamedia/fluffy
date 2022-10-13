import {
    useState,
    useCallback
} from 'react'

import environment from '@utils/environment'

const useLocalStorage = <T>(key: string, initialValue: T) => {
    // State to store our value
    // Pass initial state function to useState so logic is only executed once
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (environment.isServer) {
            return initialValue
        }

        try {
            // Get from local storage by key
            const item = window.localStorage.getItem(key)
            // Parse stored json or if none return initialValue
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            // If error also return initialValue
            console.log(error)
            return initialValue
        }
    })

    // Return a wrapped version of useState's setter function that ...
    // ... persists the new value to localStorage.
    const setValue = useCallback((value: T | ((val: T) => T)) => {
        try {
            // Save state
            setStoredValue(value)

            // Save to local storage
            if (environment.isClient) {
                window.localStorage.setItem(key, JSON.stringify(value))
            }
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error)
        }
    }, [key])

    return [storedValue, setValue] as const
}

export default useLocalStorage