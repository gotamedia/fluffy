import { createContext, useContext } from 'react'

const defaultValue = {
    size: 'normal',
    variant: 'light',
    loading: false
}

const CardContext = createContext(defaultValue)

const useCard = () => useContext(CardContext)

export {
    CardContext,
    useCard
}