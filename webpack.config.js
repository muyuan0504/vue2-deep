const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src'),
    },
    module: {
        rules: [
            { test: /\.vue$/, use: ['vue-loader'] },
            {
                test: /\.s[ac]ss$/,
                /** css处理：
                 *  css-loader: 将css 编译成 commonJs 模块
                 *  sass-loader: Sass 编译成 CSS
                 */
                use: [
                    'vue-style-loader',
                    'css-loader',
                    // 'sass-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // 当同时安装 node-sass 和 sass 的情况！默认 sass-loader 会选择 sass。 为了避免这种情况，可以使用 implementation 选项
                            implementation: require('sass'),
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.vue', '.json', '.jsx'], // 配置解析支持的文件扩展名，这样就不用在文件路径引入的时候,需要加 .vue 后缀了
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'aiden',
            template: path.resolve(__dirname, './index.html'),
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        static: './dist',
    },
    mode: process.env.NODE_ENV,
}
