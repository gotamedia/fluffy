# Fluffy 🦄

> It's so fluffy!

Fluffy is a opinionated but highly customizable UI library used by Gota Media AB.

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
```TSX
import { Icon, Icons } from '@gotamedia/fluffy'

const MyComponent = () => (
    <div>
        <Icon icon={Icons.Info}/>
    </div>
)
```

**Import Fluffy's Theme to enable style for all Fluffy components.**
```JSX
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Paper, getTheme } from '@gotamedia/fluffy'

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

#### Troubleshoot/Command not found
Fluffy uses Husky for running git hooks in development. Before a commit is made Fluffy will run all tests and only allow the commit if successful. If prompted with a `command not found` error in for example sourcetree follow the solution in the Husky documentation ***[https://typicode.github.io/husky/#/?id=command-not-found](https://typicode.github.io/husky/#/?id=command-not-found)***