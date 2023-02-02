import Image from './'
import { Image as Component } from './Image'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Basic: Story<Types.ImageProps> = (props) => {
    return (
        <Image {...props} />
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'
BasicStory.args = {
    src: 'https://universaldork.files.wordpress.com/2011/11/wengweng_1.jpg'
}

const WithThumbnailLazyLoad: Story<Types.ImageProps> = (props) => {
    return (
        <div style={{
            width: '100%',
            height: '500vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h1>
                {'Scroll to the bottom to see your image loads!'}
            </h1>

            <div style={{margin: 'auto auto 200px 0'}}>
                <Image {...props} />
            </div>
        </div>
    )
}

const WithThumbnailLazyLoadStory = WithThumbnailLazyLoad.bind({})
WithThumbnailLazyLoadStory.storyName = 'With thumbnail lazy load'
WithThumbnailLazyLoadStory.args = {
    lazyLoading: true,
    loadingEffect: 'blur'
}

const WithPlaceholderLazyLoad: Story<Types.ImageProps> = (props) => {
    return (
        <div style={{
            width: '100%',
            height: '500vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <h1>
                {'Scroll to the bottom to see your image loads!'}
            </h1>

            <div style={{margin: 'auto auto 200px 0'}}>
                <Image {...props} />
            </div>
        </div>
    )
}

const WithPlaceholderLazyLoadStory = WithPlaceholderLazyLoad.bind({})
WithPlaceholderLazyLoadStory.storyName = 'With placeholder lazy load'
WithPlaceholderLazyLoadStory.args = {
    lazyLoading: true,
    loadingEffect: 'blur',
    thumbnailSrc: ''
}

export {
    BasicStory,
    WithThumbnailLazyLoadStory,
    WithPlaceholderLazyLoadStory
}

export default {
    title: 'Developments/Components/Image',
    component: Component,
    argTypes: {},
    args: {
        alt: 'Mr.Weng',
        width: '500px',
        height: '400px',
        src: 'https://c.tenor.com/kZdxnMmK5B4AAAAd/weng-stare.gif',
        thumbnailSrc: 'https://universaldork.files.wordpress.com/2011/11/wengweng_1.jpg'
    }
} as Meta<Types.ImageComponent>