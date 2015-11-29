module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  uglify: {
    static_mappings: {
      // Because these src-dest file mappings are manually specified, every
      // time a new file is added or removed, the Gruntfile has to be updated.
      files: [
        {src: 'js/perfmatters.js', dest: 'js/perfmatters.min.js'},
        {src: 'views/css/style.css', dest: 'views/css/style.min.css'},
        {src: 'views/css/bootstrap-grid.css', dest: 'views/cssbootstrap-grid.min.css'},
      ],
    },
  },
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};