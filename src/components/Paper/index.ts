import BaseComponent from './Paper'

import { Headline, Text } from './style'
import { ComponentType } from './types'

const Paper = BaseComponent as ComponentType

Paper.Headline = Headline
Paper.Headline.displayName = 'Paper.Headline'
Paper.Text = Text
Paper.Text.displayName = 'Paper.Text'

export default Paper