const path = require('path');

//create main configuration object
module.exports = {
    //add entry point
    entry  : './assets/js/script.js',

    //add output
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'main.bundle.js'
    },

    //add mode
    mode : 'development'

};