import BaseComponent from './Slider'

import SlidesComponent from './components/Slides'
import NavigatorComponent from './components/Navigator'
import FullscreenComponent from './components/Fullscreen'
import SlidesCountComponent from './components/SlidesCount'

import type { SliderComponentType } from './types'

export * from './types'

const Slider = BaseComponent as SliderComponentType

Slider.Slides = SlidesComponent
Slider.Navigator = NavigatorComponent
Slider.Fullscreen = FullscreenComponent
Slider.SlidesCount = SlidesCountComponent

Slider.Slides.displayName = 'Slider.Slides'
Slider.Navigator.displayName = 'Slider.Navigator'
Slider.Fullscreen.displayName = 'Slider.Fullscreen'
Slider.SlidesCount.displayName = 'Slider.SlidesCount'

export default Slider