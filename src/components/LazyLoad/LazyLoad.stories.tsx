import { useState } from 'react'

import LazyLoad from './'
import { LazyLoad as Component} from './LazyLoad'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const Basic: Story<Types.LazyLoadProps> = (props) => {
    const [loaded, setLoaded] = useState(false)

    return (
        <div style={{
            width: '100%',
            height: '500vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div style={{
                position: 'fixed'
            }}>
                <h1>
                    {'Scroll to the bottom to see your paragraph loads!'}
                </h1>

                <h2>
                    {`Paragraph is ${loaded ? 'loaded' : 'not loaded'}`}
                </h2>
            </div>

            <LazyLoad
                {...props}
                onLoaded={() => setLoaded(true)}
                style={{
                    margin: 'auto auto 0 0'
                }}
            >
                <p>{'I am lazy loaded paragraph 🙃'}</p>
            </LazyLoad>
        </div>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

export {
    BasicStory
}

export default {
    title: 'Developments/Components/LazyLoad',
    component: Component,
    argTypes: {},
    args: {
        
    }
} as Meta<Types.LazyLoadComponent>