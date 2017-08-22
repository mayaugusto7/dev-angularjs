/**
 * Created by mayco on 22/04/2017.
 */
module.exports = function (config) {

    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
            '../bower_components/angular/angular.min.js',
            '../bower_components/angular-mocks/angular-mocks.js',
            '*.js'
        ],

        exclue: [],

        port: 8082,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['Chrome'],

        singleRun: false
    });

};