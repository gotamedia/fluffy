import { defineConfig } from 'cypress'

export default defineConfig({
    retries: 1,
    viewportWidth: 1000,
    viewportHeight: 660,
    component: {
        devServer: {
            framework: 'create-react-app',
            bundler: 'webpack'
        }
    }
})