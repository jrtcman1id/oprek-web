const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const { ModuleFederationPlugin } = require('webpack').container;

const setting =  {
    mode: 'production',
    build: './dist/prod',
    port: 3000,
};

let publicPathProdTest = `http://localhost:${setting.port}/`;
let publicPathProd = `http://oprec.jrtc.man1.id/`;

module.exports = {
    entry: ["regenerator-runtime/runtime.js", './src/index.js'],
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, setting.build),
        publicPath: publicPathProd
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
                test: /\.(png|jpg|svg)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
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
            title: 'Oprec jRTC',
            template: 'src/page-template.hbs',
            viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
            description: 'Oprec jRTC App',
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(setting.mode)
        }),
        // new webpack.SourceMapDevToolPlugin({})
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