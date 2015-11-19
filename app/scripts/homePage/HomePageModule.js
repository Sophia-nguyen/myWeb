define([
  "security"
], function(Security) {

  angular.module("homePageApp", [])
    .config(function($routeProvider) {
      $routeProvider.when("/", checkLogin());

      function checkLogin() {
        if (Security.isLogin) {
          return {
            redirectTo: function() {
              return "/home";
            }
          }
        } else {
          return {
            templateUrl: "scripts/homePage/HomePageTmpl.html",
            controller : "homePageCtrl"
          }
        }
      }
    })
    .controller("homePageCtrl", function($scope) {
      $scope.login = function() {
        /** Login success. **/
        Security.isLogin = true;

        loadModules();
      };

      function loadModules() {
        require([
          "scrips/ModulesManager"
        ], function() {

        });
      }
    }).directive("header", function() {
      return {
        restrict    : "E",
        templateUrl : "scripts/template/HeaderLoginTmpl.html"
      };
    });
});
