module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                banner: '/*! <%= pkg.main %> (v<%= pkg.version %>, license: <%= pkg.license %>) <%= grunt.template.today("dd-mmm-yyyy") %> */\n'
            },
            build: {
                src: 'babyparse.js',
                dest: 'babyparse.min.js'
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'babyparse.js', 'tests/test-cases.js', 'tests/test-runner.js'],
            options: {
                force: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                reporter: require('jshint-stylish')
            },
        }
    });

    // Load the plugin that provides the "jshint" task.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    grunt.registerTask('travis', ['jshint']);
    grunt.registerTask('default', ['jshint', 'uglify']);
    grunt.registerTask('build', ['jshint', 'uglify']);

};