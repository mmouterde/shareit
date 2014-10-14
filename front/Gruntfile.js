'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          'app/scripts/{,*/}*.js'
        ]
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              'dist/{,*/}*',
              '!dist/.git*'
            ]
          }
        ]
      },
      dev: {
        src: 'app/index.html'
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/styles/',
            src: '{,*/}*.css',
            dest: '.tmp/styles/'
          }
        ]
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        src: ['app/index.html']


      }},

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: 'app/index.html',
      options: {
        dest: 'dist',
        flow: {
          html: {
            steps: {
              js: ['concat'],
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['dist/{,*/}*.html'],
      css: ['dist/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['dist', 'dist/images']
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [
          {
            expand: true,
            cwd: 'dist',
            src: ['*.html', 'views/**.html'],
            dest: 'dist'
          }
        ]
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dev: {
        src: 'app/index.template.html',
        dest: 'app/index.html'
      },
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: 'app',
            dest: 'dist',
            src: [
              '*.{ico,png,txt}',
              '.htaccess',
              '*.html',
              'views/{,*/}*.html',
              'images/{,*/}*.{webp}',
              'fonts/*'
            ]
          },
          {
            expand: true,
            cwd: '.tmp/images',
            dest: 'dist/images',
            src: ['generated/*']
          },
          {
            expand: true,
            cwd: 'bower_components/bootstrap/dist',
            src: 'fonts/*',
            dest: 'dist'
          }
        ]
      },
      styles: {
        expand: true,
        cwd: 'app/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    },

    fileblocks: {
      dev: {
        files: [
          { src: 'app/index.html',
            blocks: {
              'app': {
                src: 'app/**/*.js',
                rename: function (dest, src) {
                  //remove the first part of the path (app/)
                  return src.substring(4);
                }
              },
              'css': {
                src: 'app/**/*.css',
                rename: function (dest, src) {
                  //remove the first part of the path (app/)
                  return src.substring(4);
                }
              }
            }
          }
        ]
      }
    },

    watch: {
      index: {
        files: ['app/index.template.html'],
        tasks: ['dev']
      }
    }
  });


  grunt.registerTask('dev', [
    'jshint',
    'clean:dev',
    'copy:dev',
    'wiredep',
    'fileblocks:dev'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep:dist',
    'useminPrepare',
    'autoprefixer',
    'concat',
    'copy:dist',
    'cssmin',
    'usemin',
    'htmlmin'
  ]);

};
