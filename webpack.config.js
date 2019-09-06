const webpack = require("webpack"); 
const path = require("path"); 
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //transfer style vis css not js
const HtmlWebpackPlugin = require('html-webpack-plugin') ; 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development', //development | production
    optimization: {
        minimize: false //for minify .js files
    },
    entry: {//we create new property for each entry point , key is name and value should point to entry point
        'index' : './src/index/index.js' ,    
        'article' : './src/article/article.js' ,    
        'articles' : './src/articles/articles.js' ,    
        'category' : './src/category/category.js' ,    
        //'courses' : './src/courses/courses.js' ,    
        'repairRequest' : './src/repair-request/repair-request.js' ,    
        'repairTeach' : './src/repair-teach/repair-teach.js' ,    
        'representation' : './src/representation/representation.js' ,    
        'video' : './src/video/video.js' ,    
        'aboutUs' : './src/about-us/about-us.js' ,    
        'rules' : './src/rules/rules.js' ,    
        'login' : './src/login/login.js' ,    
        'track' : './src/track/track.js'       
    },
    output: {//for each entry point we create one .js bundle(with the same name of entry point)
        filename: '[name].js',
        path: path.resolve(__dirname, './dist') 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader" ,
				exclude: /node_modules/,
            },
            { //for transfer .css via css files
                test: /\.css$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hmr: process.env.NODE_ENV === 'development', //for enabling HMR(hot module reloading)
                        reloadAll: true,
                      },
                    },
                    'css-loader',
                    'postcss-loader'
                ]
            },
            // { //for transfer .css via js files
            //     test: /\.css$/,
            //     use: ['style-loader','css-loader','postcss-loader']
            // },
            {//for transfer .scss via css files
                test:/\.scss$/,
                use: [
                    {
                      loader: MiniCssExtractPlugin.loader,
                      options: {
                        hmr: process.env.NODE_ENV === 'development',
                        reloadAll: true,
                      },
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            // { //for transfer .scss via js files
            //     test: /\.scss$/,
            //     use: ['style-loader','css-loader','postcss-loader','sass-loader']
            // },
            {
                test : /\.html$/,
                exclude: /node_modules/,		
                use: [ {
                    loader: 'html-loader',
                    options: {
                        minimize: false , //for minify html or not
                        publicPath: './'
                    }
                }]
            },
            {
                test : /\.(png|jpg|jpeg)$/ ,
                exclude: /node_modules/,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/imgs/',
                            publicPath : 'assets/imgs/'
                        }
                        }
                ]
            },
            {
                test : /\.(ttf|otf|woff|woff2|eot)$/ ,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/fonts/',
                            publicPath : 'assets/fonts/'
                        }
                        }
                ]
            },
            {
                test : /\.svg$/ ,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/svgs/',
                            publicPath : 'assets/svgs/'
                        }
                        }
                ]
            },
            {
                test : /\.mp4$/ ,
                use : [ {
                        loader : 'file-loader' ,
                        options : {
                            name : '[name].[ext]',
                            outputPath : 'assets/vids/',
                            publicPath : 'assets/vids/'
                        }
                        }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ //for each .html file we have one bundle .css file that its name is same as its entry point
            filename: "[name].css", 
            chunkFilename: '[id].css',
            ignoreOrder: false 
        }),
        new HtmlWebpackPlugin({ //for each .html file we need new instance of 'HtmlWebpackPlugin'
            filename: 'index.html' , //name of file inside ./dist folder
            inject: true,
            chunks: ['index'],
            template: './src/index/index.html' //should point to target html file that we want to add <script>,<link>
        }),
        new HtmlWebpackPlugin({ 
            filename: 'article.html' , 
            inject: true,
            chunks: ['article'],
            template: './src/article/article.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'articles.html' , 
            inject: true,
            chunks: ['articles'],
            template: './src/articles/articles.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'category.html' , 
            inject: true,
            chunks: ['category'],
            template: './src/category/category.html' 
        }),
        // new HtmlWebpackPlugin({ 
        //     filename: 'courses.html' , 
        //     inject: true,
        //     chunks: ['courses'],
        //     template: './src/courses/courses.html' 
        // }),
        new HtmlWebpackPlugin({ 
            filename: 'repair-request.html' , 
            inject: true,
            chunks: ['repairRequest'],
            template: './src/repair-request/repair-request.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'repair-teach.html' , 
            inject: true,
            chunks: ['repairTeach'],
            template: './src/repair-teach/repair-teach.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'representation.html' , 
            inject: true,
            chunks: ['representation'],
            template: './src/representation/representation.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'video.html' , 
            inject: true,
            chunks: ['video'],
            template: './src/video/video.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'about-us.html' , 
            inject: true,
            chunks: ['aboutUs'],
            template: './src/about-us/about-us.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'rules.html' , 
            inject: true,
            chunks: ['rules'],
            template: './src/rules/rules.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'track.html' , 
            inject: true,
            chunks: ['track'],
            template: './src/track/track.html' 
        }),
        new HtmlWebpackPlugin({ 
            filename: 'login.html' , 
            inject: true,
            chunks: ['login'],
            template: './src/login/login.html' 
        }),
        new CleanWebpackPlugin()
    ]
};