(function (angular) {

  // Create all modules and define dependencies to make sure they exist
  // and are loaded in the correct order to satisfy dependency injection
  // before all nested files are concatenated by Gulp

  // Config
  angular.module('angularLib.config', [])
      .value('angularLib.config', {
          debug: true
      });

  // Modules
  angular.module('angularLib.directives', []);
  angular.module('angularLib.filters', []);
  angular.module('angularLib.services', []);
  angular.module('angularLib',
      [
          'angularLib.config',
          'angularLib.directives',
          'angularLib.filters',
          'angularLib.services',
          'ngResource',
          'ngCookies',
          'ngSanitize'
      ]);

})(angular);
