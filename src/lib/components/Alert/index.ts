import AlertComponent from './Alert'

import {
    Content,
    Headline,
    Text
} from './style'

import { CompoenntType } from './types'

const Alert = AlertComponent as CompoenntType

Alert.Content = Content
Alert.Content.displayName = 'Alert.Content'
Alert.Headline = Headline
Alert.Headline.displayName = 'Alert.Headline'
Alert.Text = Text
Alert.Text.displayName = 'Alert.Text'

export default Alert