module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-protractor-coverage');
	grunt.loadNpmTasks('grunt-istanbul');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.initConfig({
  		protractor_coverage: {
    		options: {
      			keepAlive: true, 
      			noColor: false,
				collectorPort: 3001,
				coverageDir: 'coverage',
      			args: {}
    		},
    		e2e: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too. 
      			options: {
        			configFile: "config/protractor-e2e.conf.js", // Target-specific config file
        			args: {} // Target-specific arguments
      			}
    		},
  		},
		copy: {
			main: {
				files: [
					{expand: true, src: ['app/**'], dest: 'instrumented/'}
				]
			}
		},
		clean: {
			js: ['instrumented/app/js/*.js']
		},
		instrument: {
			files: 'app/js/*.js',
			options: {
				lazy: true,
				basePath: "instrumented"
			}
		},
		connect: {
			options: {
				base: 'instrumented/app'
			}
		},
		makeReport: {
			src: 'coverage/*.json',
			options: {
				type: 'lcov',
				dir: 'coverage/reports',
				print: 'detail'
			}
		}
	});

	grunt.registerTask('default', ['copy','clean','instrument','protractor_coverage','makeReport']);
}

