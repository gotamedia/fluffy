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

const WithFullscreen: Story<Types.SliderProps> = (props) => {
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

                <Slider.Fullscreen />
            </Slider>
        </div>
    )
}

const WithFullscreenStory = WithFullscreen.bind({})
WithFullscreenStory.storyName = 'With Fullscreen'

const WithSlidesCount: Story<Types.SliderProps> = (props) => {
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

                <Slider.SlidesCount />
            </Slider>
        </div>
    )
}

const WithSlidesCountStory = WithSlidesCount.bind({})
WithSlidesCountStory.storyName = 'With SlidesCount'

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

                <Slider.SlidesCount />
                <Slider.Navigator />
                <Slider.Fullscreen />
            </Slider>
        </div>
    )
}

const FullStory = Full.bind({})
FullStory.storyName = 'Full'

export {
    BasicStory,
    WithNavigatorStory,
    WithFullscreenStory,
    WithSlidesCountStory,
    FullStory
}

export default {
    title: 'Components/Slider',
    component: Component,
    argTypes: {},
    args: {}
} as Meta<typeof Slider>