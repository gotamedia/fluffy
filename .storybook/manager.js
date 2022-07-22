import { addons } from '@storybook/addons'
import gotaMediaTheme from './gotaMediaTheme'

const stableComponents = [
    'Button',
    'ButtonGroup',
    'IconButton',
    'SwitchButton',
    'UploadButton',
    'Icon',
    'Alert',
    'Paper'
]

addons.setConfig({
    theme: gotaMediaTheme
})