import BaseComponent from './Card'

import CardImage from './components/CardImage'
import CardBody from './components/CardBody'
import CardSubHeadline from './components/CardSubHeadline'
import CardHeadline from './components/CardHeadline'
import CardParagraph from './components/CardParagraph'

import { CardComponentType } from './types'

export * from './types'

const Card = BaseComponent as CardComponentType

Card.Image = CardImage
Card.Image.displayName = 'Card.Image'

Card.Body = CardBody
Card.Body.displayName = 'Card.Body'

Card.SubHeadline = CardSubHeadline
Card.SubHeadline.displayName = 'Card.SubHeadline'

Card.Headline = CardHeadline
Card.Headline.displayName = 'Card.Headline'

Card.Paragraph = CardParagraph
Card.Paragraph.displayName = 'Card.Paragraph'

export default Card