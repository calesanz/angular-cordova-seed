module.exports = function (grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Remove built directory
        clean: {
            build: ['www/']
        },
        // Built stylesheets with less
        less: {
            build: {
                src: 'src/assets/less/*',
                dest: 'www/css/app.css'
            }
        },
        // Build the site using grunt-includes
        includes: {
            build: {
                cwd: 'site',
                src: ['src/*.html', 'src/*/*.html'],
                dest: 'www/',
                options: {
                    flatten: true,
                    includePath: 'include',
                    banner: '<!-- Site built using grunt includes! -->\n'
                }
            }
        },
        //Js hint code check
        jshint: {
            all: ["./src/**/*.js","!./src/build.config.js"],
            options: {
                unused: true
            }
        },
        requirejs: {
            compile: {
                options: {
                    appDir: "src/",
                    baseUrl: ".",
                    dir: "www/",
                    optimize: 'uglify',
                    mainConfigFile: './src/build.config.js',

                    logLevel: 0,
                    findNestedDependencies: true,
                    fileExclusionRegExp: /^\./,
                    inlineText: true
                }
            }
        }


    });

    // Load plugins used by this task gruntfile
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Task definitions
    grunt.registerTask('build', ['clean', 'less', 'jshint','requirejs', 'includes']);
    grunt.registerTask('default', ['build']);

};