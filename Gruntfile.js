module.exports = function(grunt) {

  grunt.initConfig({
    appConfig: {
      baseClientPath: 'app',
      baseDestPath: 'public' 
    },

    watch: {
      sass: {
        files: [
          '<%= appConfig.baseClientPath %>/styles/*.{sass,scss}'
        ],
        tasks: ['sass']
      },
//       livereload: {  
//         files: ['Gruntfile.js', 'index.html', '<%= appConfig.baseClientPath %>/**/*.{js,html,css}'],
//         options: {
//           livereload: true
//         }
//       },
    },

    sass: {
      dist: {
        files: [{
          'public/styles/app.css': 'app/styles/app.scss' 
        }]
      }
    },

    connect: {
      server: {
        options: {
          port: 3000,
          hostname: '0.0.0.0',
          //livereload: 8000,
          base: '.',
          useAvailablePort: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', 'Serve content, open browser, watch changes', function() {

    grunt.task.run([
      'connect',
      'watch'
    ]);

  });

  grunt.registerTask('build', 'compile sass and jade and put in destination files', function() {

    grunt.task.run([
      'sass'
    ]);

  });

};