module.exports = function(config){
    config.set({


    basePath : '../',

    files : [
        'test/e2e/**/*.js'
    ],

    autoWatch : false,

    browsers : ['PhantomJS'],

    frameworks: ['ng-scenario'],

    singleRun : true,

    proxies : {
      '/': 'http://localhost:8000/'
    },

    plugins : [
            'karma-junit-reporter',
			'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
			'karma-coverage',
            'karma-ng-scenario'    
            ],

    junitReporter : {
      outputFile: 'test_out/e2e.xml',
      suite: 'e2e'
    },

	// coverage reporter generates the coverage
    reporters: ['progress', 'coverage'],

	preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'src/**/*.js': ['coverage']
    }


})}

