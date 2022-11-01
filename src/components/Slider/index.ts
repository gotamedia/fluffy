import BaseComponent from './Slider'

import SlidesComponent from './components/Slides'
import NavigatorComponent from './components/Navigator'
import FullScreenComponent from './components/FullScreen'

import type { SliderComponentType } from './types'

export * from './types'

const Slider = BaseComponent as SliderComponentType

Slider.Slides = SlidesComponent
Slider.Navigator = NavigatorComponent
Slider.FullScreen = FullScreenComponent

Slider.Slides.displayName = 'Slider.Slides'
Slider.Navigator.displayName = 'Slider.Navigator'
Slider.FullScreen.displayName = 'Slider.FullScreen'

export default Slider