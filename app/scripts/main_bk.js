var defaultModules = ["ngRoute", "angulike", "facebook"],
    facebookAppId = '505408372887842',
    testApp, testApp1,
    configModules,
    myApp;


/** Add multiple modules, with multiple routers. **/
testApp = angular.module("testApp", defaultModules);



testApp.controller("testCtl", function($scope, Facebook) {
  $scope.$watch(function() {
    // This is for convenience, to notify if Facebook is loaded and ready to go.
    return Facebook.isReady();
  }, function(newVal) {
    // You might want to use this to disable/show/hide buttons and else
    $scope.facebookReady = true;
  });

  $scope.IntentLogin = function() {
    Facebook.login(function(response) {
      console.log("test");
      console.log(response);
    });
  };
});

testApp.config(function($routeProvider, FacebookProvider) {
  FacebookProvider.init(facebookAppId);


  $routeProvider.when("/about", {
    template: 'about <button type="button" class="btn btn-primary btn-large" data-ng-show="!logged" data-ng-disabled="!facebookReady"  data-ng-click="IntentLogin()">Login with Facebook</button>',
    controller: "testCtl"
  })
});


testApp1 = angular.module("testApp1", defaultModules);
testApp1.config(function($routeProvider) {
  $routeProvider.when("/contact", {
    template: 'contact'
  })
});


/** main app **/
require([

], function() {
  configModules = ["aboutCtrl"]; /** module list on in this app. **/

  myApp = angular.module("myApp", defaultModules.concat(configModules));

  myApp.controller("homeCtl", function($scope) {
    $scope.data = {
      Url: 'https://www.youtube.com/watch?v=nmPcz5vIA7I&index=5&list=PLWglOIfkJX0JYcHdoYpZb9wkhCyp-sYni',
      Name: "AngularJS directives",
      ImageUrl: 'http://www.jasonwatmore.com/pics/jason.jpg'
    };
  });

  myApp.config(function($routeProvider) {
    $routeProvider.when("/home", {
      template: "home {{languages.title}} <div fb-like='data.Url'></div>", //create like facebook with data in controller
      controller: "homeCtl"
    }).when("/", {
      redirectTo: function() {
        return "/home";
      }
    }).otherwise({
      /* redirectTo: function(routerParams, path, query_string) {
       return "/";
       }*/
      template: "404"
    })
  });

  /** get languages file and set to $rootScope, then use in all controller(view). **/
  myApp.run(function($rootScope, $http) {
    /** load properties file. **/
    $http.get('properties/languages.json').then(function (response) {
      $rootScope.languages = response.data;
    });

    $http.get('scripts/modules/AboutModule.js');

    /** set your facebook app id here. **/
    $rootScope.facebookAppId = facebookAppId;
  });
});

