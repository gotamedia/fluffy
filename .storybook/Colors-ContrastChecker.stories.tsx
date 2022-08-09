import React, { useState } from 'react'
import styled, { css } from 'styled-components'

import {
    getContrast,
    meetsContrastGuidelines
} from 'polished'

import type { Story, Meta } from '@storybook/react'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 20px;
    justify-content: center;
    align-items: center;
`

const textareaStyle = css`
    display: block;
    width: 700px;
    height: 200px;
    margin-top: 18px;
    padding: 0px 0px 6px;
    border: none;
    background-color: transparent;
    line-height: inherit;
    resize: none;
`

const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const LargeText = styled.p`
    margin: 0;
    font-size: 18pt;
`

const NormalText = styled.p`
    margin: 0;
    font-size: 1rem;
`

const LargeTextarea = styled.textarea`
    ${textareaStyle};
    font-size: 18pt;
`

const NormalTextarea = styled.textarea`
    ${textareaStyle};
    font-size: 1rem;
`

const ContrastWrapper = styled.div`
    display: flex;
`

const ContrastItem = styled.div`
    width: 150px;
    font-size: 25px;
`

const text = `Click/Tap to edit me. That Biff, what a character. Always trying to get away with something. Been on top of Biff ever since high school. Although, if it wasn't for him - Yes, yes, I'm George, George McFly, and I'm your density. I mean, I'm your destiny. Right. Alright, take it up, go. Doc. Something wrong with the starter, so I hid it.`

const Palette: Story = (props) => {
    const {
        color,
        background
    } = props

    const [value, setValue] = useState(text)

    const handleOnChange = event => setValue(event.target.value)

    const contrastRatio = getContrast(background, color)
    const contrast = meetsContrastGuidelines(background, color)

    return (
        <Wrapper style={{ backgroundColor: background }}>
            <InnerWrapper>
                <ContrastWrapper>
                    <InnerWrapper>
                        {
                            Object.entries(contrast).map((item, idx) => {
                                return (
                                    <ContrastWrapper key={idx}>
                                        <ContrastItem style={{ color: color }}>
                                            {item[0]}: 
                                        </ContrastItem>

                                        <ContrastItem style={{ color: color }}>
                                            {item[1] ? '✅' : '❌'}
                                        </ContrastItem>
                                    </ContrastWrapper>
                                )
                            })
                        }
                    </InnerWrapper>

                    <ContrastItem style={{ color: color, margin: 'auto', fontSize: '35px'}}>
                        {contrastRatio}
                    </ContrastItem>
                </ContrastWrapper>
            </InnerWrapper>

            <InnerWrapper>
                <LargeText style={{ color: color }}>
                    {'- Large Text - 18pt/24px'}
                </LargeText>

                <LargeTextarea
                    style={{ color: color }}
                    value={value}
                    onChange={handleOnChange}
                />
            </InnerWrapper>

            <InnerWrapper>
                <NormalText style={{ color: color }}>
                    {'- Normal Text - 16px'}
                </NormalText>

                <NormalTextarea
                    style={{ color: color }}
                    value={value}
                    onChange={handleOnChange}
                />
            </InnerWrapper>
        </Wrapper>
    )
}

const PaletteStory = Palette.bind({})
PaletteStory.storyName = 'Contrast checker'

export {
    PaletteStory
}

export default {
    title: 'Colors/Contrast checker',
    component: Palette,
    argTypes: {},
    args: {
        color: '#ffffff',
        background: '#005ca9'
    }
} as Meta<typeof Palette>