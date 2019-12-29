
/*!
 * apms-frontend
 * Copyright(c) 2019 chiffathefox <den.9896@gmail.com>
 * MIT Licenced
 */


"use strict";


const path = require("path");


module.exports = {
    target: "web",
    devtool: "source-map",
    entry: {
        main: "./src/main.jsx"
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "public/assets")
    },
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {

            /* XXX: don't forget to update `.flowconfig` */

            Config: path.resolve(__dirname, "src/config.js"),
            Lang: path.resolve(__dirname, "src/lang.js"),
            Components: path.resolve(__dirname, "src/components"),
            Containers: path.resolve(__dirname, "src/containers"),
            Scss: path.resolve(__dirname, "src/scss")
        }
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-flow",
                                "@babel/preset-react",
                            ],
                            plugins: [
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-proposal-class-properties"
                            ]
                        }
                    },
                    "eslint-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "public"),
        publicPath: "/assets",
        port: 8888
    }
};