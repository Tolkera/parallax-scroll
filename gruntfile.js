module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'styles/styles.css': 'styles/styles.scss'
                }
            }
        },

        watch: {
            css: {
                files: ['styles/*.scss', 'styles/*/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },

            gruntfile: {
                files: ['gruntfile.js']
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['watch']);
};