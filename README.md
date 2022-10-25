# Fluffy 🦄

> It's so fluffy!

Fluffy is a opinionated but highly customizable UI library used by Gota Media AB.

**[DEMO](https://fluffy.gotamedia.se)**

## Install

```
npm i @gotamedia/fluffy
```

## Peer dependencies
Fluffy requires that you install following depdencies in your own project
```
npm i react styled-components
```

## Usage
```tsx
import { Icon, Icons } from '@gotamedia/fluffy'

// OR use direct import if you care about your APP's bundle size 😉
// import Icon, { Icons } from '@gotamedia/fluffy/Icon'

const MyComponent = () => (
    <div>
        <Icon icon={Icons.RocketLaunch}/>
    </div>
)
```

**Import Fluffy's Theme to enable style for all Fluffy components.**
```tsx
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Paper, getTheme } from '@gotamedia/fluffy'

// OR use direct import if you care about your APP's bundle size 😉
// import Paper from '@gotamedia/fluffy/Paper'
// import { getTheme } from '@gotamedia/fluffy/theme'

const App = () => (
    <div>
        <Paper>
            {`It's so themeable! 👩‍🎤`}
        </Paper>
    </div>
)

render((
    <ThemeProvider theme={getTheme()}>
        <App />
    </ThemeProvider>
), document.getElementById('root'))
```

## Develop in Fluffy

Fluffy uses Storybook to present it's components, each component should have a *.stories.tsx in it's root dir in order to show it in Storybook
```tsx
import React from 'react'
import { Story, Meta } from '@storybook/react'

import MyComponent from './index'
import * as Types from './types'

export default {
    title: 'Components/MyComponent',
    component: MyComponent,
    argTypes: {
    },
} as Meta<typeof MyComponent>

const Template: Story<Types.MyComponentProps & {
    text: string
}> = (props) => {

    return (
        <MyComponent>
            {props.text}
        </MyComponent>
    )
}

export const Basic = Template.bind({})

Basic.args = {
    text: 'My fluffy component'
}
```

To see your component run:
```bash
npm run storybook
```

It will open a new tab in your browser with all the component stories on the left sidebar

## Develop with Fluffy

In order to develop with Fluffy with your project locally, make sure to have `yalc` installed globally on your machine by running:
```
npm install -g yalc
```

### Publish locally

To use Fluffy in your project locally make sure to build Fluffy by running:
```
npm run local
```

This will make sure to build and publish Fluffy into a local registery on your machine so you can install it as a package in your projects

### Install locally

In your project run the following command:
```
yalc add @gotamedia/fluffy
npm install
```

After you are done with running Fluffy locally in your project, make sure to clean up and remove the link from your project's dependencies
```
yalc remove @gotamedia/fluffy
```

This will make sure to remove the link from your project's dependencies and revert to the old value if there was any

[Read more about yalc](https://www.npmjs.com/package/yalc)

## License

MIT

## 🦄 You have reached the end 🦄

## Fluffy Development / contributing
So you want to get fluffy.

### Trunk based development
This project uses a [trunk based development](https://cloud.google.com/architecture/devops/devops-tech-trunk-based-development) workflow.

### Conventional commits
This project works with [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).