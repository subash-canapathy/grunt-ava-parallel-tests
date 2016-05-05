'use strict';

module.exports = function (grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // configure tasks
  grunt.initConfig({
    env: {
      local: {
        driverHost : "localhost",
        driverPort : "",
        driverType : function() {return grunt.option('driverType')},
        driverCapabilities : function() {grunt.option('driverCapabilities')}
      },
      sauce: {
        SAUCE_USERNAME : "",
        SAUCE_ACCESS_KEY : "",
        driverHost : "",
        driverPort : "",
        driverType : function() {return grunt.option('driverType')},
        driverCapabilities : function() {grunt.option('driverCapabilities')}
      }
    },
    // TODO: would love to use "grunt-ava" plugin instead once the command line flags are supported in future.
    shell: {
      test: {
        command: "npm run ava -- \"src/tests/**/*.js\" --verbose"
      },
      bvt: {
        command: "npm run ava -- \"src/tests/**/*.js\" --match='@bvt*' --verbose"
      }
    },

    concurrent: {
      all: ['run_iOS', 'run_Android'],
      bvt: ['run_iOS_bvt', 'run_Android_bvt']
    }
  });

  // Register driver capabilities and type for each test runtime combination

  grunt.registerTask('Nexus7', function(n) {
    grunt.option('driverCapabilities', "Nexus7");
    grunt.option('driverType', 'AppiumAndroid');
  });

  grunt.registerTask('iPhone6', function(n) {
    grunt.option('driverCapabilities', "iPhone6");
    grunt.option('driverType', 'AppiumiOS');
  });

  // Register test suite tasks, all of these should be runnable in parallel

  grunt.registerTask('run_iOS', ['iPhone6', 'env:local', 'shell:test']);
  grunt.registerTask('run_Android', ['Nexus7', 'env:local', 'shell:test']);

  grunt.registerTask('run_iOS_bvt', ['iPhone6', 'env:local', 'shell:bvt']);
  grunt.registerTask('run_Android_bvt', ['Nexus7', 'env:local', 'shell:bvt']);

  // Register default task
  grunt.registerTask('default', ['concurrent:all']);
};

