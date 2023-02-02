import { useContext } from 'react'

import ListContext from '../../contexts/ListContext'

const useList = () => useContext(ListContext)

export default useList