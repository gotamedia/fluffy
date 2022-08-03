import BaseComponent from './Card'

import CardImage from './components/CardImage'
import CardBody from './components/CardBody'
import CardTitle from './components/CardTitle'
import CardHeadline from './components/CardHeadline'
import CardIconsWrapper from './components/CardIconsWrapper'
import CardParagraph from './components/CardParagraph'

import { CardComponentType } from './types'

export * from './types'

const Card = BaseComponent as CardComponentType

Card.Image = CardImage
Card.Image.displayName = 'Card.Image'

Card.Body = CardBody
Card.Body.displayName = 'Card.Body'

Card.Title = CardTitle
Card.Title.displayName = 'Card.Title'

Card.Headline = CardHeadline
Card.Headline.displayName = 'Card.Headline'

Card.Paragraph = CardParagraph
Card.Paragraph.displayName = 'Card.Paragraph'

Card.IconsWrapper = CardIconsWrapper
Card.IconsWrapper.displayName = 'Card.IconsWrapper'

export default Card