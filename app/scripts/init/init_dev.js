requirejs.config({
  baseUrl: "./scripts"
  , waitSeconds: 0
  , deps: [
    "main"
  ]
  , shim: {
      main: {
        deps: ["jquery","angular", "i18n", "angular-route", "bootstrap"]
      },
      angular: {
        deps: ["jquery"]
      },
      bootstrap: {
        deps: ["jquery"]
      },
      i18n: {
        deps: ["jquery"]
      },
      angulike: {
        deps: ["angular"]
      },
      "angular-route": {
        deps: ["angular"]
      },
      "angular-face": {
        deps: ["angular"]
      }
  }
  , map: {

  }
  , paths: {
      jquery          : "../bower_components/jquery/dist/jquery",
      angular         : "../bower_components/angular/angular",
      angulike        : "../bower_components/angulike/angulike",
      "angular-route" : "../bower_components/angular-route/angular-route",
      "i18n"          : "../bower_components/jquery-i18n-properties/jquery.i18n.properties",
      "angular-face"  : "../bower_components/angular-facebook/lib/angular-facebook",
      "bootstrap"     : "../bower_components/bootstrap-sass/assets/javascripts/bootstrap"
  }
});
