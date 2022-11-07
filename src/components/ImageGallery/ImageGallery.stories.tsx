import React, {
    useState
} from 'react'

import styled from 'styled-components'

import ImageGallery from './'
import { ImageGallery as Component } from './ImageGallery'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const images = [
    'https://images.unsplash.com/photo-1535083783855-76ae62b2914e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80',
    'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
    'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    'https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2688&q=80',
    'https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=654&q=80',
    'https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80'
]

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: auto;
`

const Basic: Story<Types.ImageGalleryProps> = (props) => {
    const [index, setIndex] = useState(0)

    const slides = (
        images.map(image => {
            return (
                <Image
                    key={image}
                    src={image}
                />
            )
        })
    )

    return (
        <div>
            <ImageGallery
                {...props}
                style={{ width: 800, height: 500 }}
                index={index}
                onChange={newIndex => setIndex(newIndex)}
            >
                <ImageGallery.Slides>
                    {slides}
                </ImageGallery.Slides>

                <ImageGallery.Preview>
                    {slides}
                </ImageGallery.Preview>

                <ImageGallery.Navigator />
                <ImageGallery.Fullscreen />
                <ImageGallery.SlidesCount />
            </ImageGallery>
        </div>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Components/ImageGallery',
    component: Component,
    argTypes: {},
    args: {}
} as Meta<typeof ImageGallery>