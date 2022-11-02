import BaseComponent from './Slider'

import SlidesComponent from './components/Slides'
import NavigatorComponent from './components/Navigator'
import FullscreenComponent from './components/Fullscreen'

import type { SliderComponentType } from './types'

export * from './types'

const Slider = BaseComponent as SliderComponentType

Slider.Slides = SlidesComponent
Slider.Navigator = NavigatorComponent
Slider.Fullscreen = FullscreenComponent

Slider.Slides.displayName = 'Slider.Slides'
Slider.Navigator.displayName = 'Slider.Navigator'
Slider.Fullscreen.displayName = 'Slider.Fullscreen'

export default Slider