module.exports = function(config){
    config.set({

    basePath : '../',

    files : [
		'app/js/*.js',
        'test/e2e/*.js'
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
            'karma-ng-scenario',    
			'karma-coverage'
            ],

	// coverage reporter generates the coverage
    reporters: ['progress', 'junit', 'coverage'],

	preprocessors: {
      	// source files, that you wanna generate coverage for
      	// do not include tests or libraries
      	// (these files will be instrumented by Istanbul)
      	'app/js/*.js': ['coverage']
    },

    junitReporter : {
	  useBrowserName: false,
      outputDir: 'test_results',
	  outputFile: 'e2e.xml',
      suite: 'e2e'
    },

	coverageReporter: {
		dir: 'coverage',
		reporters: [
			// reporters not supporting the `file` property 
			{ type: 'html', subdir: 'report-html' },
			{ type: 'lcov', subdir: 'report-lcov' },
			// reporters supporting the `file` property, use `subdir` to directly 
			// output them in the `dir` directory 
	        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
	        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
	        { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
	        { type: 'text', subdir: '.', file: 'text.txt' },
	        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' }
		]
	}

})}

