import BaseComponent from './ImageGallery'

import SlidesComponent from '@components/Slider/components/Slides/Slides'
import NavigatorComponent from '@components/Slider/components/Navigator/Navigator'
import FullscreenComponent from '@components/Slider/components/Fullscreen/Fullscreen'
import SlidesCountComponent from '@components/Slider/components/SlidesCount/SlidesCount'

import PreviewComponent from './components/Preview'

import type { ImageGalleryComponentType } from './types'

export * from './types'

const ImageGallery = BaseComponent as ImageGalleryComponentType

ImageGallery.Slides = SlidesComponent
ImageGallery.Navigator = NavigatorComponent
ImageGallery.Fullscreen = FullscreenComponent
ImageGallery.SlidesCount = SlidesCountComponent
ImageGallery.Preview = PreviewComponent

ImageGallery.Slides.displayName = 'ImageGallery.Slides'
ImageGallery.Navigator.displayName = 'ImageGallery.Navigator'
ImageGallery.Fullscreen.displayName = 'ImageGallery.Fullscreen'
ImageGallery.SlidesCount.displayName = 'ImageGallery.SlidesCount'
ImageGallery.Preview.displayName = 'ImageGallery.Preview'

export default ImageGallery