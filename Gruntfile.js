'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            options: {
                livereload: true
            },
            server: {
                files: ['Gruntfile.js', 'app/scripts/**/*.js', '!app/scripts/compiled.js', 'app/styles/**/*.scss', 'app/**/*.html'],
                tasks: ['jshint', 'browserify', 'sass']
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    livereload: true,
                    open: true,
                    base: 'app'
                }
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
            },
            files: ['app/scripts/**/*.js', '!app/scripts/compiled.js']
        },
        browserify: {
            server: {
                files: {
                    'app/scripts/compiled.js': ['app/scripts/main.js']
                }
            }
        },
        sass: {
            options: {
                outputStyle: 'compiled'
            },
            server: {
                files: {
                    'app/styles/compiled.css': 'app/styles/main.scss'
                }
            }
        }
    });

    grunt.registerTask('server', ['jshint', 'browserify', 'sass', 'connect', 'watch']);

    grunt.registerTask('default', ['server']);
};
