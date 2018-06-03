const path = require('path');
const config = {
    mode: "development",
    target: 'web',
    entry: './src/kckit.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'kckit.js'
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    }
}

module.exports = [
    config,
    Object.assign({}, config, {
        mode: "production",
        output: Object.assign({}, config.output, {
            filename: 'kckit.min.js'
        }),
        optimization: {
            minimize: true,
            noEmitOnErrors: true,
        },
    })
]