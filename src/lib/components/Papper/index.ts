import BaseComponent from './Papper'

import { Headline, Text } from './style'
import { ComponentType } from './types'

const Papper = BaseComponent as ComponentType

Papper.Headline = Headline
Papper.Headline.displayName = 'Papper.Headline'
Papper.Text = Text
Papper.Text.displayName = 'Papper.Text'

export default Papper