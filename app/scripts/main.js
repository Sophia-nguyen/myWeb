define([
  "security",
  "homePage/HomePageModule"
], function(Security) {
  var defaultModules = ["ngRoute", "homePageApp"],
    myApp;

  /** main app **/
  myApp = angular.module("myApp", defaultModules);

  /** add other modules as dependencies of myApp. **/
  //configModules = ["homeApp", "aboutApp"];
  //Array.prototype.push.apply(myApp.requires, configModules);

  myApp.config(function($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: function() {
        return Security.isLogin ? "/home" : "/";
      }
    })
  });

  /** get languages file and set to $rootScope, then use in all controller(view). **/
  myApp.run(function($rootScope, $http) {
    /** load properties file. **/
    $http.get('properties/languages.json').then(function (response) {
      $rootScope.languages = response.data;
    });
  });
});
