import { createContext, useContext } from 'react'

const defaultValue = {
    loading: false
}

const CardContext = createContext(defaultValue)

const useCard = () => useContext(CardContext)

export {
    CardContext,
    useCard
}