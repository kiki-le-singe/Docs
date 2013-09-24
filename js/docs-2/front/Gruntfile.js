module.exports = function(grunt) {

  // Note :
  // Pour éxécuter des tests jasmine avec grunt et requirejs, il faut les modules nodes suivants :
  // - grunt-contrib-jasmine
  // - grunt-template-jasmine-requirejs
  // Puis dans le fichier Gruntfile.js, ne pas oublier de configurer la tâche 
  // jasmine:options:templateOptions:requireConfig comme la config require pour le projet. @see js/main.js
  // @see : Help - https://github.com/netzzwerg/example-grunt-jasmine-require
  // ??? src : 'js/**/*.js'

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jasmine : {
        src : 'js',
        options : {
            verbose: true,
            specs : 'tests/ut/**/*.js',
            helpers: 'tests/ut/**/*Helper.js',
            template: require('grunt-template-jasmine-requirejs'),
            templateOptions: {
              requireConfig: {
                baseUrl: 'js',
                shim: {
                  underscore: {
                    exports: '_'
                  },
                  backbone: {
                    deps: [
                      'underscore',
                      'jquery'
                    ],
                    exports: 'Backbone'
                  }
                },
                paths: {
                  jquery: 'libs/jquery/jquery',
                  underscore: 'libs/underscore/underscore',
                  backbone: 'libs/backbone/backbone',
                  text: 'libs/requirejs-text/text',
                  tpl: 'libs/requirejs-tpl/tpl',
                  // Définis ou se trouve les templates
                  templates: 'templates'
                }
              }
            }
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('test', ['jasmine']);
};