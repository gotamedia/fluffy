const path = require('path')

const ROOT_DIR = path.resolve(__dirname, '..')

module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        '../src/**/**/*.stories.mdx',
        '../src/**/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-a11y',
        '@react-theming/storybook-addon'
    ],
    webpackFinal: async (config) => {
        return {
            ...config,
            resolve: {
                ...config.resolve,
                alias: {
                    ...config.resolve.alias,
                    "@root": path.resolve(ROOT_DIR, 'src/lib/'),
                    "@components": path.resolve(ROOT_DIR, 'src/lib/components/'),
                    "@hooks": path.resolve(ROOT_DIR, 'src/lib/hooks/'),
                    "@utils": path.resolve(ROOT_DIR, 'src/lib/utils/')
                }
            }
        }
    }
}