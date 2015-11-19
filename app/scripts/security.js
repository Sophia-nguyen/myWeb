define([

], function() {
  function Security() {

  }

  Object.defineProperties(Security.prototype, {
    isLogin: {
      get: function () {
        return sessionStorage.getItem("isLogin");
      },
      set: function (isLogin) {
        sessionStorage.setItem("isLogin", isLogin);
      }
    }
  });


  return new Security();
});
