import BaseComponent from './ImageGallery'

import SlidesComponent from '@components/Slider/components/Slides/Slides'
import NavigationComponent from '@components/Slider/components/Navigation/Navigation'
import FullscreenComponent from '@components/Slider/components/Fullscreen/Fullscreen'
import SlidesCountComponent from '@components/Slider/components/SlidesCount/SlidesCount'

import PreviewComponent from './components/Preview'

import type { ImageGalleryComponentType } from './types'

export * from './types'

const ImageGallery = BaseComponent as ImageGalleryComponentType

ImageGallery.Slides = SlidesComponent
ImageGallery.Navigation = NavigationComponent
ImageGallery.Fullscreen = FullscreenComponent
ImageGallery.SlidesCount = SlidesCountComponent
ImageGallery.Preview = PreviewComponent

ImageGallery.Slides.displayName = 'ImageGallery.Slides'
ImageGallery.Navigation.displayName = 'ImageGallery.Navigation'
ImageGallery.Fullscreen.displayName = 'ImageGallery.Fullscreen'
ImageGallery.SlidesCount.displayName = 'ImageGallery.SlidesCount'
ImageGallery.Preview.displayName = 'ImageGallery.Preview'

export default ImageGallery