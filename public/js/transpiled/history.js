"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var vm;
  return {
    setters: [],
    execute: function () {
      vm = new Vue({
        el: "#app",
        data: {
          list: [],
          isLoggedIn: false
        },
        methods: {
          toggleLoggedIn: function toggleLoggedIn() {
            this.isLoggedIn = !this.isLoggedIn;
          }
        }
      });


      hoodie.store.withIdPrefix("list").findAll().then(function (savedList) {
        return vm.list = savedList;
      });

      hoodie.account.get("session").then(function (session) {
        if (!session) {
          // user is singed out
          vm.isLoggedIn = false;
        } else if (session.invalid) {
          vm.isLoggedIn = false;
        } else {
          // user is signed in
          vm.isLoggedIn = true;
        }
      });
    }
  };
});