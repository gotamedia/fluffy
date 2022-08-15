const path = require('path')

const ROOT_DIR = path.resolve(__dirname, '..')

module.exports = {
    core: {
        builder: 'webpack5',
    },
    stories: [
        './*.stories.mdx',
        './*.stories.tsx',
        '../src/**/**/*.stories.mdx',
        '../src/**/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        'storybook-dark-mode',
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
                    "@root": path.resolve(ROOT_DIR, 'src/'),
                    "@components": path.resolve(ROOT_DIR, 'src/components/'),
                    "@contexts": path.resolve(ROOT_DIR, 'src/contexts/'),
                    "@hooks": path.resolve(ROOT_DIR, 'src/hooks/'),
                    "@utils": path.resolve(ROOT_DIR, 'src/utils/')
                }
            }
        }
    }
}