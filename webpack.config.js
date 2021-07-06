const path = require('path');
const webpack = require('webpack');

//create main configuration object
module.exports = {
    //add entry point
    entry  : './assets/js/script.js',

    //add output
    output : {
        path : path.resolve(__dirname, '/dist'),
        filename : 'main.bundle.js'
    },

    plugins : [
        new webpack.ProvidePlugin({
            $ : 'jquery',
            jQuery : 'jquery'
        }),
    ],
    //add mode
    mode : 'development'

};