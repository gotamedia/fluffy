import BaseComponent from './Slider'

import SliderBulletsComponent from "./components/Bullets/SliderBullets"
import SlidesComponent from './components/Slides'
import NavigationComponent from './components/Navigation'
import FullscreenComponent from './components/Fullscreen'
import SlidesCountComponent from './components/SlidesCount'

import type { SliderComponentType } from './types'

export * from './types'

const Slider = BaseComponent as SliderComponentType

Slider.Slides = SlidesComponent
Slider.SliderBullets = SliderBulletsComponent
Slider.Navigation = NavigationComponent
Slider.Fullscreen = FullscreenComponent
Slider.SlidesCount = SlidesCountComponent

Slider.Slides.displayName = 'Slider.Slides'
Slider.Navigation.displayName = 'Slider.Navigation'
Slider.Fullscreen.displayName = 'Slider.Fullscreen'
Slider.SlidesCount.displayName = 'Slider.SlidesCount'

export default Slider