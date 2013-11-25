'use strict';

module.exports = function (grunt) {
	require('time-grunt')(grunt);

	grunt.initConfig({

	});

	// do nothing
	grunt.registerTask('default', []);

	// do async stuff and fail
	grunt.registerTask('test', ['write', 'task_fail', 'end']);

	// do async stuff and pass
	grunt.registerTask('build', ['write', 'task_pass', 'end']);

	// ---------- helpers  ----------

	// wait a little and write some output, then PASS
	grunt.registerTask('write', function () {
		var done = this.async();
		setTimeout(function () {
			for (var i = 0; i < 10; i++) {
				grunt.log.writeln(i);
			}
			done(true);
		}, 500);
	});

	// wait a little and PASS task
	grunt.registerTask('task_pass', function () {
		var done = this.async();
		setTimeout(function () {
			done(true);
		}, 500);
	});

	// wait a little and FAIL task
	grunt.registerTask('task_fail', function () {
		var done = this.async();
		setTimeout(function () {
			done(false);
		}, 500);
	});

	// print end message
	grunt.registerTask('end', function () {
		grunt.log.writeln('this is the end');
	});

};
