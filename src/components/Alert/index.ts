export * from './types'

import AlertComponent from './Alert'

import {
    Content,
    Headline,
    Text
} from './style'

import { ComponentType } from './types'

const Alert = AlertComponent as ComponentType

Alert.Content = Content
Alert.Content.displayName = 'Alert.Content'
Alert.Headline = Headline
Alert.Headline.displayName = 'Alert.Headline'
Alert.Text = Text
Alert.Text.displayName = 'Alert.Text'

export default Alert