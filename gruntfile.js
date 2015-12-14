module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  uglify: {
    static_mappings: {
      // Because these src-dest file mappings are manually specified, every
      // time a new file is added or removed, the Gruntfile has to be updated.
      files: [
        {src: 'js/perfmatters.js', dest: 'js/minified/perfmatters.min.js'},
        {src: 'views/js/main.js', dest: 'views/js/minified/main.min.js'}
      ],
    },
  },
  imagemin: {
    png: {
      options: {
        optimizationLevel: 7
      },
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'views/images/',
          src: ['*.png'],
          // Could also match cwd line above. i.e. project-directory/img/
          dest: 'views/images/compressed/',
          ext: '.png'
        },
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'img/',
          src: ['*.png'],
          // Could also match cwd line above. i.e. project-directory/img/
          dest: 'img/compressed/',
          ext: '.png'
        }
      ]
    },
    jpg: {
      options: {
        progressive: true
      },
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'views/images/',
          src: ['*.jpg'],
          // Could also match cwd. i.e. project-directory/img/
          dest: 'views/images/compressed/',
          ext: '.jpg'
        },
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'img/',
          src: ['*.jpg'],
          // Could also match cwd. i.e. project-directory/img/
          dest: 'img/compressed/',
          ext: '.jpg'
        }
      ]
    }
  },
  htmlmin: {                                     // Task
    dist: {                                      // Target
      options: {                                 // Target options
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   // Dictionary of files
        'index.html': 'src/index.html',     // 'destination': 'source'
        'views/pizza.html': 'views/src/pizza.html'
      }
    },
    dev: {                                       // Another target
      files: {
        'index.html': 'src/index.html',
        'views/pizza.html': 'views/src/pizza.html'
      }
    }
  },
  uncss: {
    dist: {
      files: {
        'views/css/cleaned.css': ['views/pizza.html']
      }
    }
  }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-uncss');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['imagemin']);
  grunt.registerTask('default', ['htmlmin']);
  grunt.registerTask('default', ['uncss']);
};