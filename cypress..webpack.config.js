const path = require('path')

const rootDir = path.resolve(__dirname, ".")

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@root': path.resolve(rootDir, 'src/'),
            '@components': path.resolve(rootDir, 'src/components/'),
            '@contexts': path.resolve(rootDir, 'src/contexts/'),
            '@hooks': path.resolve(rootDir, 'src/hooks/'),
            '@utils': path.resolve(rootDir, 'src/utils/')
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": [
                            [
                                "@babel/preset-env"
                            ],
                            [
                                "@babel/preset-typescript"
                            ],
                            [
                                "@babel/preset-react",
                                {
                                    "runtime": "automatic"
                                }
                            ]
                        ]
                    }
                }
            }
        ]
    }
}