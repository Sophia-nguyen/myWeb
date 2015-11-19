define([
  "modules/about/AboutModule",
  "modules/home/HomeModule",
  "modules/concat/ConcatModule"
], function() {
    var configModules = ["homeApp", "aboutApp"];

    /** add other modules as dependencies of myApp. **/
    Array.prototype.push.apply(myApp.requires, configModules);
});
