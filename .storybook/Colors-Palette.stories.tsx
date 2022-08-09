import React from 'react'
import styled from 'styled-components'
import fontColorContrast from 'font-color-contrast'

import {
    tint,
    shade,
    meetsContrastGuidelines
} from 'polished'

import type { Story, Meta } from '@storybook/react'

const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const Wrapper = styled.div`
    display: flex;
    gap: 50px;
`

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
`

const ColumnItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-right: 1px solid gray;
    padding-right: 35px;
    padding-top: 20px;
    margin: -5px 0;
`

const ColorWrapper = styled.div`
    display: flex;
`

const ColorItem = styled.div`
    width: 200px;
    height: 110px;
    border-radius: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
`

const ContrastWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 35px;
`

const ContrastItem = styled.div`
    display: flex;

    P {
        margin: 0;
        text-transform: capitalize;
        
        &:first-child {
            width: 100px;
        }
    }
`

const Color = (props) => {
    const {
        textColor,
        backgroundColor
    } = props

    let contrast = {}

    try {
        contrast = meetsContrastGuidelines(backgroundColor, textColor)
    } catch(error) {
        // ignore
    }

    return (
        <ColorWrapper>
            <ColorItem style={{ backgroundColor: backgroundColor }}>
                <p style={{ color: textColor }}>
                    {backgroundColor}
                </p>
            </ColorItem>

            <ContrastWrapper>
                {
                    Object.entries(contrast).map((item, idx) => {
                        return (
                            <ContrastItem key={idx}>
                                <p>
                                    {item[0]}: 
                                </p>

                                <p>
                                    {item[1] ? '✅' : '❌'}
                                </p>
                            </ContrastItem>
                        )
                    })
                }
            </ContrastWrapper>
        </ColorWrapper>
    )
}

const getColor = (color, mixValue, steps, method) => {
    let colorValue = color

    for (let i = 0; i <= steps; i++) {
        try {
            colorValue = method(mixValue, colorValue)
        } catch(error) {
            // ignore
        }
    }

    return colorValue
}

const Colors = (props) => {
    const {
        colors,
        light,
        dark,
        paletteQuantity = 0
    } = props

    const lightValue = light / 100
    const darkValue = dark / 100

    return (
        <Wrapper>
            {
                colors.map((color, idx) => {
                    return (
                        <ColumnWrapper key={idx}>
                            <ColumnItem>
                                {
                                    [...new Array(paletteQuantity)].map((i, idx) => {
                                        const backgroundColor = getColor(color, lightValue, idx, tint)
                                        const textColor = fontColorContrast(backgroundColor)

                                        return (
                                            <Color
                                                key={idx}
                                                textColor={textColor}
                                                backgroundColor={backgroundColor}
                                            />
                                        )
                                    }).reverse()
                                }
                            </ColumnItem>

                            <ColumnItem>
                                <Color
                                    textColor={fontColorContrast(color)}
                                    backgroundColor={color}
                                />

                                {
                                    [...new Array(paletteQuantity)].map((i, idx) => {
                                        const backgroundColor = getColor(color, darkValue, idx, shade)
                                        const textColor = fontColorContrast(backgroundColor)

                                        return (
                                            <Color
                                                key={idx}
                                                textColor={textColor}
                                                backgroundColor={backgroundColor}
                                            />
                                        )
                                    })
                                }
                            </ColumnItem>
                        </ColumnWrapper>
                    )
                })
            }
        </Wrapper>
    )
}

const Palette: Story = (props) => {
    const {
        color1,
        color2,
        color3,
        color4,
        color5,
        color6,
        color7,
        light,
        dark,
        paletteQuantity
    } = props

    const group1 = [
        color1,
        color2,
        color3,
        color4
    ]

    const group2 = [
        color5,
        color6,
        color7
    ]

    return (
        <MainWrapper>
            <Colors
                colors={group1}
                light={light}
                dark={dark}
                paletteQuantity={paletteQuantity}
            />

            <Colors
                colors={group2}
                light={light}
                dark={dark}
                paletteQuantity={paletteQuantity}
            />
        </MainWrapper>
    )
}

const PaletteStory = Palette.bind({})
PaletteStory.storyName = 'Palette'

export {
    PaletteStory
}

export default {
    title: 'Colors/Palette',
    component: Palette,
    argTypes: {},
    args: {
        light: 18.3,
        dark: 15,
        paletteQuantity: 5,
        color1: '#41ad49',
        color2: '#d00019',
        color3: '#005ca9',
        color4: '#ef7d00',
        color5: '#8A8A8D',
        color6: '#ffffff',
        color7: '#000000'
    }
} as Meta<typeof Palette>