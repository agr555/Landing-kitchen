module.exports = function (grunt) {
    grunt.initConfig({
        less: {
            build: {
                files: {
                    'dist/styles.css': 'src/styles/styles.less'
                }
            }
        },

        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/styles.min.css': ['dist/styles.css']
                }
            }
        },
        clean: ['dist/styles.css', 'dist/styles.css.map'],
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['src/styles/*.less'],
                tasks: ['less', 'cssmin', 'clean'],
            },
        }
    });
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['watch']);
};