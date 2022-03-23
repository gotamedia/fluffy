import * as Styled from './style'
import * as Types from './types'

const Paper: Types.PaperComponent = (props) => {
    const {
        className,
        image,
        children,
        buttons
    } = props

    const hasImage = typeof image?.src === 'string' && image.src.length ? true : false

    return (
        <Styled.Wrapper className={className}>
            <Styled.InnerWrapper>
                {
                    hasImage ? (
                        <Styled.ImageWrapper>
                            <Styled.Image {...image}/>
                        </Styled.ImageWrapper>
                    ) : (
                        null
                    )
                }

                <Styled.Content>
                    {children}
                </Styled.Content>

                {
                    buttons ? (
                        <Styled.ButtonsWrapper>
                            {buttons}
                        </Styled.ButtonsWrapper>
                    ) : (
                        null
                    )
                }
            </Styled.InnerWrapper>
        </Styled.Wrapper>
    )
}

export default Paper