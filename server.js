const express = require('express');
const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const app = express();
const compiler = webpack({
    entry: [
        'webpack/hot/dev-server',
        'webpack-hot-middleware/client',
        __dirname + '/client/index.js'
    ],
    output: {
        path: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            { test: /pixi/, use: ['expose-loader?PIXI'] },
            { test: /phaser/, use: ['expose-loader?Phaser'] },
            { test: /p2/, use: ['expose-loader?p2'] },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader'] }
        ]
    }
});

app.use(express.static('client'));

app.use(
    devMiddleware(
        compiler, {
            watchOptions: {
                aggregateTimeout: 300,
                poll: true
            },
            publicPath: 'http://localhost:3000/',
            stats: {
                colors: true
            }
        }
    )
);

app.use(hotMiddleware(compiler, { log: console.log }));

app.get('/', (req, res) => res.sendFile('index.html', { root: 'client' }));

app.listen(3000, () => {
    console.log('server was started');
});
