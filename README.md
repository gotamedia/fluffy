# Fluffy 🦄

> It's so fluffy!

Fluffy is a opinionated but highly customizable UI library used by Gota Media AB. It's built with Chakra UI as a base library in combination with other third party and in house built packages.

## Install

```
npm i @gotamedia/fluffy
```

## Peer dependencies
Fluffy requires that you install following depdencies in your own project
```
npm i @emotion/react @emotion/styled react styled-system
```

## Usage
```JSX
import { Flex, Heading, Text } from '@gotamedia/fluffy'

const MyComponent = () => (
    <Flex>
        <Heading>it's so Fluffy! 🦄</Heading>
    </Flex>
)
```

**Import Fluffy's ThemeProvider to enable style for all Fluffy components.**
```JSX
import { render } from 'react-dom'
import { ThemeProvider } from '@gotamedia/fluffy'

const App = () => (
    <Flex>
        <Heading>It's so themeable! 👩‍🎤</Heading>
    </Flex>
)

render((
    <ThemeProvider>
        <App />
    </ThemeProvider>
), document.getElementById('root'))
```

**Fluffy is style opinionated and comes with a default theme. You can extend this theme and pass your own to the ThemeProvider.**
```JSX
import { render } from 'react-dom'
import { ThemeProvider, extendTheme, Flex, Heading } from '@gotamedia/fluffy'

const App = () => (
    <Flex>
        <Heading>It's so themeable! 👩‍🎤</Heading>
    </Flex>
)

const theme = extendTheme({
    newProp: 'adding a new prop to the default theme'
})

render((
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
), document.getElementById('root'))
```

`Warning: Some components will fail to load style and read from the theme if rendered on the same level because it tries to access the theme to early.`

## Don't do this ❌
```JSX
import { render } from 'react-dom'
import { ThemeProvider, Flex, Heading } from '@gotamedia/fluffy'

render((
    <ThemeProvider>
        <Flex>
            <Heading>Theme is not available for all components</Heading>
        </Flex>
    </ThemeProvider>
), document.getElementById('root'))
```

## Do this ✅
```JSX
import { render } from 'react-dom'
import { ThemeProvider } from '@gotamedia/fluffy'

const App = () => (
    <Flex>
        <Heading>Theme is available for all components</Heading>
    </Flex>
)

render((
    <ThemeProvider>
        <App />
    </ThemeProvider>
), document.getElementById('root'))
```

## License

MIT

## 🦄 You have reached the end 🦄

## Fluffy Development / contributing
So you want to get fluffy.

### Trunk based development
This project uses a [trunk based development](https://cloud.google.com/architecture/devops/devops-tech-trunk-based-development) workflow.

### Conventional commits
This project works with [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Deploy
Add deploy guide here

### Storybook
```
npm run storybook
```

#### Troubleshoot/Command not found
Fluffy uses Husky for running git hooks in development. Before a commit is made Fluffy will run all tests and only allow the commit if successful. If prompted with a `command not found` error in for example sourcetree follow the solution in the Husky documentation ***[https://typicode.github.io/husky/#/?id=command-not-found](https://typicode.github.io/husky/#/?id=command-not-found)***