module.exports = function (grunt) {

	var archivo = {
		nArchivo: grunt.option('nArchivo');
	}

	var config = grunt.file.readJSON(archivo.nArchivo);

	grunt.registerTask('generateIndex', function() {
		console.log(config.appName);
		grunt.file.copy('index.html', config.buildFolder + '/index.html', {
			process: function(files){
				return grunt.template.process(files, {
					data: {
						appName: config.appName,
					}
				});
			}
		});
	});

	grunt.registerTask('generateIndex', function() {
		console.log(config.appName);
		grunt.file.copy('index.html', config.buildFolder + '/index.html', {
			process: function(files){
				return grunt.template.process(files, {
					data: {
						appName: config.appName,
					}
				});
			}
		});
	});

	grunt.registerTask('generatePageOne', function() {
		console.log(config.appName);
		grunt.file.copy('page1.html', config.buildFolder + '/page1.html', {
			process: function(files){
				return grunt.template.process(files, {
					data: {
						pageOneName: config.pageOneName,
					}
				});
			}
		});
	});

	grunt.registerTask('generatePageTwo', function() {
		console.log(config.appName);
		grunt.file.copy('page2.html', config.buildFolder + '/page2.html', {
			process: function(files){
				return grunt.template.process(files, {
					data: {
						pageTwoName: config.pageTwoName,
					}
				});
			}
		});
	});

	grunt.registerTask('build', ['generateIndex', 'generatePageOne', 'generatePageTwo']);

}