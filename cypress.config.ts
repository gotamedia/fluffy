import { defineConfig } from 'cypress'

// @ts-ignore
import webpackConfig from './cypress..webpack.config'

export default defineConfig({
    retries: 2,
    viewportWidth: 1000,
    viewportHeight: 660,
    video: false,
    screenshotOnRunFailure: false,
    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack',
            webpackConfig: webpackConfig
        }
    }
})