'use strict';
module.exports = function(grunt) {

    grunt.initConfig({
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
                    'lib/thirdparty/font-awesome/less/*.less',
                ],
                tasks: ['less']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.registerTask('dev', ['watch']);
};
