import { useContext } from 'react'
import { SliderContext } from '../../contexts/SliderContext'

const useSlider = () => useContext(SliderContext)

export default useSlider