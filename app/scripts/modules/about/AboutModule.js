angular.module("aboutApp", [])
  .config(function($routeProvider) {
    $routeProvider.when("/about", {
      templateUrl: "scripts/modules/about/AboutTmpl.html",
      controller: "aboutCtrl"
    })
  })
  .controller("aboutCtrl", function($scope) {
  });
