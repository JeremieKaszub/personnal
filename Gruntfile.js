module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);


    grunt.initConfig({
        compass: {
            sass: {
                options: {
                    sassDir: 'src/AppBundle/Resources/styles',
                    cssDir: '.tmp/css',
                    importPath: 'app/Resources/lib',
                    outputStyle: 'expanded',
                    noLineComments: true
                }
            }
        },
        cssmin: {
            combine: {
                options:{
                    report: 'gzip',
                    keepSpecialComments: 0
                },
                files: {
                    'web/built/min.css': [
                        '.tmp/css/**/*.css',
                        'app/Resources/lib/Fontello/fontello-codes.css'
                    ]
                }
            }
        },
        watch: {
            css: {
                files: ['src/AppBundle/Resources/styles/**/*.scss',
                        'src/AppBundle/Resources/views/**/*/*/style.scss'],
                tasks: ['css']
            },
            javascript: {
                files: ['src/AppBundle/Resources/scripts/*.js'],
                tasks: ['javascript']
            }
        },
        uglify: {
            options: {
                mangle: false,
                sourceMap: true,
                sourceMapName: 'web/built/app.map'
            },
            dist: {
                files: {
                    'web/built/app.min.js':[
                        'app/Resources/lib/jquery/dist/jquery.js',
                        'app/Resources/lib/bootstrap-sass-official/assets/javascripts/bootstrap.js',
                        'src/AppBundle/Resources/scripts/index.js',
                        '.tmp/js/**/*.js'
                    ]
                }
            }
        },
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: 'app/Resources/lib/fontello/fonts',
                        dest: 'web/fonts',
                        src: ['**']
                    }
                ]
            }
        }
    });

    grunt.registerTask('default', ['css','javascript']);
    grunt.registerTask('javascript', ['uglify']);
    grunt.registerTask('css', ['compass','cssmin']);
    grunt.registerTask('cp', ['copy']);
};