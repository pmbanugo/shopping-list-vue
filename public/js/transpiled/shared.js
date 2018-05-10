"use strict";

System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      // if ("serviceWorker" in navigator) {
      //   navigator.serviceWorker
      //     .register("sw.js")
      //     .then(console.log)
      //     .catch(console.error);
      // }

      Vue.component("navigation", {
        props: ["isLoggedIn", "toggleLoggedIn"],
        template: "<div>\n              <header class=\"mdl-layout__header\">\n        <div class=\"mdl-layout__header-row\">\n          <!-- Title -->\n          <span class=\"mdl-layout-title\">Shopping List</span>\n          <!-- Add spacer, to align navigation to the right -->\n          <div class=\"mdl-layout-spacer\"></div>\n          <!-- Navigation. We hide it in small screens. -->\n          <nav class=\"mdl-navigation mdl-layout--large-screen-only\">\n            <a class=\"mdl-navigation__link\" href=\"index.html\">Home</a>\n            <a class=\"mdl-navigation__link\" href=\"history.html\">History</a>\n            <a v-show=\"!isLoggedIn\" @click=\"showLogin\" style=\"cursor: pointer\" class=\"mdl-navigation__link login\">Login</a>\n            <a v-show=\"!isLoggedIn\" @click=\"showRegister\" style=\"cursor: pointer\" class=\"mdl-navigation__link register\">Register</a>\n            <a v-show=\"isLoggedIn\" @click=\"logout\" style=\"cursor: pointer\" class=\"mdl-navigation__link logout\">Logout</a>\n          </nav>\n        </div>\n      </header>\n      <div class=\"mdl-layout__drawer\">\n        <span class=\"mdl-layout-title\">Shopping List</span>\n        <nav class=\"mdl-navigation\">\n          <a class=\"mdl-navigation__link\" href=\"index.html\">Home</a>\n          <a class=\"mdl-navigation__link\" href=\"history.html\">History</a>\n          <a v-show=\"!isLoggedIn\" @click=\"showLogin\" style=\"cursor: pointer\" class=\"mdl-navigation__link login\">Login</a>\n          <a v-show=\"!isLoggedIn\" @click=\"showRegister\" style=\"cursor: pointer\" class=\"mdl-navigation__link register\">Register</a>\n          <a v-show=\"isLoggedIn\" @click=\"logout\" style=\"cursor: pointer\" class=\"mdl-navigation__link logout\">Logout</a>\n        </nav>\n      </div>\n            </div>",

        methods: {
          showLogin: function showLogin() {
            var loginDialog = document.querySelector("#login-dialog");
            dialogPolyfill.registerDialog(loginDialog);
            loginDialog.showModal();
          },
          showRegister: function showRegister() {
            var registerDialog = document.querySelector("#register-dialog");
            dialogPolyfill.registerDialog(registerDialog);
            registerDialog.showModal();
          },
          logout: function logout() {
            var _this = this;

            hoodie.account.signOut().then(function () {
              _this.toggleLoggedIn();
              location.href = location.origin;
            }).catch(function (error) {
              console.log(error);
              alert("Could not logout");
            });
          }
        }
      });

      Vue.component("login-dialog", {
        data: function data() {
          return {
            username: "",
            password: ""
          };
        },
        props: ["toggleLoggedIn"],
        template: "<dialog id=\"login-dialog\" class=\"mdl-dialog\">\n      <h4 class=\"mdl-dialog__title\">Login</h4>\n      <div class=\"mdl-dialog__content\">\n        <div class=\"mdl-grid center-items\">\n          <!-- Simple Textfield -->\n          <div class=\"mdl-textfield mdl-js-textfield\">\n            <input v-model=\"username\" class=\"mdl-textfield__input\" type=\"text\" id=\"login-username\">\n            <label class=\"mdl-textfield__label\" for=\"login-username\">Username</label>\n          </div>\n        </div>\n        <div class=\"mdl-grid center-items\">\n          <!-- Simple Textfield -->\n          <div class=\"mdl-textfield mdl-js-textfield\">\n            <input v-model=\"password\" class=\"mdl-textfield__input\" type=\"password\" id=\"login-password\">\n            <label class=\"mdl-textfield__label\" for=\"login-password\">Password</label>\n          </div>\n        </div>\n        <div class=\"mdl-grid center-items\">\n          <!-- Simple Textfield -->\n          <div class=\"mdl-textfield mdl-js-textfield\">\n            <span id=\"login-error\"></span>\n          </div>\n        </div>\n      </div>\n      <div class=\"mdl-dialog__actions\">\n        <button @click=\"closeLogin\" type=\"button\" class=\"mdl-button close\">Cancel</button>\n        <button @click=\"login\" type=\"button\" class=\"mdl-button\">Login</button>\n      </div>\n    </dialog>",
        methods: {
          closeLogin: function closeLogin() {
            var loginDialog = document.querySelector("#login-dialog");
            dialogPolyfill.registerDialog(loginDialog);
            loginDialog.close();
          },
          login: function login(event) {
            var _this2 = this;

            hoodie.account.signIn({
              username: this.username,
              password: this.password
            }).then(function () {
              _this2.toggleLoggedIn();
              _this2.closeLogin();
            }).catch(function (error) {
              console.log(error);
              document.querySelector("#login-error").innerHTML = "Error loggin in";
            });
          }
        }
      });

      Vue.component("register-dialog", {
        data: function data() {
          return {
            username: "",
            password: ""
          };
        },
        props: ["toggleLoggedIn"],
        template: "<dialog id=\"register-dialog\" class=\"mdl-dialog\">\n      <h4 class=\"mdl-dialog__title\">Register</h4>\n      <div class=\"mdl-dialog__content\">\n        <div class=\"mdl-grid center-items\">\n          \n          <div class=\"mdl-textfield mdl-js-textfield\">\n            <input v-model=\"username\" class=\"mdl-textfield__input\" type=\"text\" id=\"register-username\">\n            <label class=\"mdl-textfield__label\" for=\"register-username\">Username</label>\n          </div>\n        </div>\n        <div class=\"mdl-grid center-items\">\n          \n          <div class=\"mdl-textfield mdl-js-textfield\">\n            <input v-model=\"password\" class=\"mdl-textfield__input\" type=\"password\" id=\"register-password\">\n            <label class=\"mdl-textfield__label\" for=\"register-password\">Password</label>\n          </div>\n        </div>\n        <div class=\"mdl-grid center-items\">\n          \n          <div class=\"mdl-textfield mdl-js-textfield\">\n            <span id=\"register-error\"></span>\n          </div>\n        </div>\n      </div>\n      <div class=\"mdl-dialog__actions\">\n        <button @click=\"closeRegister\" type=\"button\" class=\"mdl-button close\">Cancel</button>\n        <button @click=\"register\" type=\"button\" class=\"mdl-button\">Register</button>\n      </div>\n    </dialog>",
        methods: {
          closeRegister: function closeRegister() {
            var registerDialog = document.querySelector("#register-dialog");
            dialogPolyfill.registerDialog(registerDialog);
            registerDialog.close();
          },
          register: function register() {
            var _this3 = this;

            var options = { username: this.username, password: this.password };

            hoodie.account.signUp(options).then(function (account) {
              return hoodie.account.signIn(options);
            }).then(function (account) {
              _this3.toggleLoggedIn();
              _this3.closeRegister();
              return account;
            }).catch(function (error) {
              console.log(error);
              document.querySelector("#register-error").innerHTML = "Error occured on Registration";
            });
          }
        }
      });
    }
  };
});