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
        tasks: ['compiler:sass']
      },
      livereload: {  
        files: ['Gruntfile.js', 'index.html', '<%= appConfig.baseClientPath %>/**/*.{js,html,css}'],
        options: {
          livereload: true
        }
      },
    },
    connect: {
      server: {
        options: {
          port: 8000,
          hostname: 'localhost',
          livereload: 35729,
          base: './public',
          open: true,
          useAvailablePort: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('default', 'Serve content, open browser, watch changes', function(target) {

    grunt.task.run([
      'connect',
      'watch'
    ]);

  });

  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
    sass: {
        options: {
            sourceMap: true
        },
        dist: {
            files: {
                'main.css': 'main.scss'
            }
        }
    }
});

grunt.registerTask('default', ['sass']);

};