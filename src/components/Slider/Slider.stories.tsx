import React, {
    useState
} from 'react'

import Slider from '.'
import { Slider as Component } from './Slider'

import type * as Types from './types'
import type { Story, Meta } from '@storybook/react'

const style = {
    width: '100%',
    height: '100%',
    background: 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const Basic: Story<Types.SliderProps> = (props) => {
    const [index, setIndex] = useState(0)

    return (
        <div>
            <Slider
                {...props}
                style={{ width: 800, height: 500 }}
                index={index}
                onChange={newIndex => setIndex(newIndex)}
            >
                <Slider.Slides>
                    {
                        [...new Array(5)].map((i, idx) => {
                            return (
                                <div
                                    key={idx}
                                    style={style}
                                >
                                    {`Slide ${idx + 1} - index: ${idx}`}
                                </div>
                            )
                        })
                    }
                </Slider.Slides>
            </Slider>
        </div>
    )
}

const BasicStory = Basic.bind({})
BasicStory.storyName = 'Basic'

const WithNavigator: Story<Types.SliderProps> = (props) => {
    const [index, setIndex] = useState(0)

    return (
        <div>
            <Slider
                {...props}
                style={{ width: 800, height: 500 }}
                index={index}
                onChange={newIndex => setIndex(newIndex)}
            >
                <Slider.Slides>
                    {
                        [...new Array(5)].map((i, idx) => {
                            return (
                                <div
                                    key={idx}
                                    style={style}
                                >
                                    {`Slide ${idx + 1} - index: ${idx}`}
                                </div>
                            )
                        })
                    }
                </Slider.Slides>

                <Slider.Navigator />
            </Slider>
        </div>
    )
}

const WithNavigatorStory = WithNavigator.bind({})
WithNavigatorStory.storyName = 'With Navigator'

const WithFullScreen: Story<Types.SliderProps> = (props) => {
    const [index, setIndex] = useState(0)

    return (
        <div>
            <Slider
                {...props}
                style={{ width: 800, height: 500 }}
                index={index}
                onChange={newIndex => setIndex(newIndex)}
            >
                <Slider.Slides>
                    {
                        [...new Array(5)].map((i, idx) => {
                            return (
                                <div
                                    key={idx}
                                    style={style}
                                >
                                    {`Slide ${idx + 1} - index: ${idx}`}
                                </div>
                            )
                        })
                    }
                </Slider.Slides>

                <Slider.FullScreen />
            </Slider>
        </div>
    )
}

const WithFullScreenStory = WithFullScreen.bind({})
WithFullScreenStory.storyName = 'With FullScreen'

const Full: Story<Types.SliderProps> = (props) => {
    const [index, setIndex] = useState(0)

    return (
        <div>
            <Slider
                {...props}
                style={{ width: 800, height: 500 }}
                index={index}
                onChange={newIndex => setIndex(newIndex)}
            >
                <Slider.Slides>
                    {
                        [...new Array(5)].map((i, idx) => {
                            return (
                                <div
                                    key={idx}
                                    style={style}
                                >
                                    {`Slide ${idx + 1} - index: ${idx}`}
                                </div>
                            )
                        })
                    }
                </Slider.Slides>

                <Slider.Navigator />
                <Slider.FullScreen />
            </Slider>
        </div>
    )
}

const FullStory = Full.bind({})
FullStory.storyName = 'Full'

export {
    BasicStory,
    WithNavigatorStory,
    WithFullScreenStory,
    FullStory
}

export default {
    title: 'Developments/Components/Slider',
    component: Component,
    argTypes: {},
    args: {}
} as Meta<typeof Slider>