const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const { ModuleFederationPlugin } = require('webpack').container;

const setting =  {
    mode: 'none',
    build: './dist/prod',
    port: 3000
};

module.exports = {
    entry: {
        'index':'./src/index.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, setting.build),
        publicPath: `http://localhost:${setting.port}/`
    },
    mode: setting.mode,
    optimization: {
        splitChunks: {
            chunks: 'all',
            minSize: 10000
        },
        chunkIds: 'named'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                exclude: [/\.styles.css$/, /node_modules/],
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                exclude: [/\.styles.scss$/, /node_modules/],
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader', 
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    'handlebars-loader'
                ]
            },
            {
                test: /\.(woff2|woff|ttf)$/,
                include: path.resolve(__dirname, './node_modules/bootstrap-icons/font/fonts'),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: setting.build+'/fonts/'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*',
                path.join(process.cwd(), 'build/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'Hello World',
            template: 'src/page-template.hbs',
            viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
            description: 'Hello World App',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(setting.mode)
        }),
        new webpack.SourceMapDevToolPlugin({})
        // new webpack.SourceMapDevToolPlugin({}),
        // new ModuleFederationPlugin({
        //     name: 'HelloWorldApp',
        //     filename: 'remoteEntry.js',
        //     exposes: {
        //         // './HelloWorldButton': './src/components/hello-world-button/hello-world-button.js',
        //         // './HelloWorldPage': './src/components/hello-world-page/hello-world-page.js',
        //         './HelloWorldPage': './src/components/hello-world-page/hello-world-page.js'
        //         // './HelloPage': './src/components/hello-page/hello-page.js'
        //     }
        // })
    ]
}