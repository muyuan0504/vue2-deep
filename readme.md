###### node version -> v16.14.2

###### vue version -> v2.6.12

-   vue-loader 版本
    对于 Vue2 版本的编译处理，需要将 vue-loader 版本降级处理( 可使用 v15.9.2 )，<u>否则会报错,提示需要单独引入：@vue/compiler-sfc</u>

    引入 vue-loader 后，别忘了在 webpack.config.js 的 module 中配置.vue 文件的处理 loader

    ```javascript
    // 由于module.rules的[test: /\.s[ac]ss$/]配置sass-loader/node-sass时忘记改了，一直用的[test: /\.css$/]，导致一直vue.style报错需要正确的loader，干!
    module.exports = {
        module: {
            rules: [{ test: /\.css$/ }],
        },
    }
    ```
