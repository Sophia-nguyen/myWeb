var contactApp = angular.module("contactApp", []);

contactApp.controller("contactCtrl", function($scope) {

});

contactApp.config(function($routeProvider) {
  $routeProvider.when("/about", {
    template: "contact",
    controller: "contactCtrl"
  })
});
