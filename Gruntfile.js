'use strict';
module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
              options: {
                    jshintrc: '.jshintrc'
              },
              all: [
                    'Gruntfile.js',
                    'lib/admin/js/*.js',
                    'lib/frontend/js/*.js',
                    '!lib/admin/js/scripts.min.js'
              ]
        },
        less: {
            dist: {
                options: {
                    compile: true,
                    compress: true
                },
                files: {
                    'lib/css/smmi.min.css': [
                        'lib/less/smmi.less'
                    ]
                }
            }
        },
        watch: {
            less: {
                files: [
                    'lib/less/*.less',
                ],
                tasks: ['less']
            },
            js : {
                files: [
                    'lib/js/*.js',
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('dev', ['watch']);
    grunt.registerTask('compile', ['jshint', 'less']);
};
