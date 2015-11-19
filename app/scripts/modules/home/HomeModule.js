define([
  "security"
], function(Security) {

  angular.module("homeApp", [])
    .config(function($routeProvider) {
      $routeProvider.when("/home", {
        templateUrl: "scripts/modules/home/HomeTmpl.html",
        controller: "homeCtrl"
      })
    })
    .controller("homeCtrl", function($scope) {
      $scope.login = function() {
        Security.isLogin = true;

      };

      $scope.logout = function() {
        Security.isLogin = "";

      };

    }).directive("header", function() {
      return {
        restrict    : "E",
        templateUrl : Security.isLogin ? "scripts/template/HeaderTmpl.html" : "scripts/template/HeaderLoginTmpl.html"
      };
    });
});
