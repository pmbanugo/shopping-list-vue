if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(console.log)
    .catch(console.error);
}

Vue.component("navigation", {
  props: ["isLoggedIn", "toggleLoggedIn"],
  template: `<div>
              <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">Shopping List</span>
          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation. We hide it in small screens. -->
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <a class="mdl-navigation__link" href="index.html">Home</a>
            <a class="mdl-navigation__link" href="history.html">History</a>
            <a v-show="!isLoggedIn" @click="showLogin" style="cursor: pointer" class="mdl-navigation__link login">Login</a>
            <a v-show="!isLoggedIn" @click="showRegister" style="cursor: pointer" class="mdl-navigation__link register">Register</a>
            <a v-show="isLoggedIn" @click="logout" style="cursor: pointer" class="mdl-navigation__link logout">Logout</a>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Shopping List</span>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="index.html">Home</a>
          <a class="mdl-navigation__link" href="history.html">History</a>
          <a v-show="!isLoggedIn" @click="showLogin" style="cursor: pointer" class="mdl-navigation__link login">Login</a>
          <a v-show="!isLoggedIn" @click="showRegister" style="cursor: pointer" class="mdl-navigation__link register">Register</a>
          <a v-show="isLoggedIn" @click="logout" style="cursor: pointer" class="mdl-navigation__link logout">Logout</a>
        </nav>
      </div>
            </div>`,

  methods: {
    showLogin: function() {
      const loginDialog = document.querySelector("#login-dialog");
      dialogPolyfill.registerDialog(loginDialog);
      loginDialog.showModal();
    },
    showRegister: function() {
      const registerDialog = document.querySelector("#register-dialog");
      dialogPolyfill.registerDialog(registerDialog);
      registerDialog.showModal();
    },
    logout: function() {
      hoodie.account
        .signOut()
        .then(() => {
          this.toggleLoggedIn();
        })
        .catch(error => {
          alert("Could not logout");
        });
    }
  }
});

Vue.component("login-dialog", {
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  props: ["toggleLoggedIn"],
  template: `<dialog id="login-dialog" class="mdl-dialog">
      <h4 class="mdl-dialog__title">Login</h4>
      <div class="mdl-dialog__content">
        <div class="mdl-grid center-items">
          <!-- Simple Textfield -->
          <div class="mdl-textfield mdl-js-textfield">
            <input v-model="username" class="mdl-textfield__input" type="text" id="login-username">
            <label class="mdl-textfield__label" for="login-username">Username</label>
          </div>
        </div>
        <div class="mdl-grid center-items">
          <!-- Simple Textfield -->
          <div class="mdl-textfield mdl-js-textfield">
            <input v-model="password" class="mdl-textfield__input" type="password" id="login-password">
            <label class="mdl-textfield__label" for="login-password">Password</label>
          </div>
        </div>
        <div class="mdl-grid center-items">
          <!-- Simple Textfield -->
          <div class="mdl-textfield mdl-js-textfield">
            <span id="login-error"></span>
          </div>
        </div>
      </div>
      <div class="mdl-dialog__actions">
        <button @click="closeLogin" type="button" class="mdl-button close">Cancel</button>
        <button @click="login" type="button" class="mdl-button">Login</button>
      </div>
    </dialog>`,
  methods: {
    closeLogin: function() {
      const loginDialog = document.querySelector("#login-dialog");
      dialogPolyfill.registerDialog(loginDialog);
      loginDialog.close();
    },
    login: function(event) {
      hoodie.account
        .signIn({
          username: this.username,
          password: this.password
        })
        .then(() => {
          this.toggleLoggedIn();
          this.closeLogin();
        })
        .catch(error => {
          console.log(error);
          document.querySelector("#login-error").innerHTML = "Error loggin in";
        });
    }
  }
});

Vue.component("register-dialog", {
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  props: ["toggleLoggedIn"],
  template: `<dialog id="register-dialog" class="mdl-dialog">
      <h4 class="mdl-dialog__title">Register</h4>
      <div class="mdl-dialog__content">
        <div class="mdl-grid center-items">
          
          <div class="mdl-textfield mdl-js-textfield">
            <input v-model="username" class="mdl-textfield__input" type="text" id="register-username">
            <label class="mdl-textfield__label" for="register-username">Username</label>
          </div>
        </div>
        <div class="mdl-grid center-items">
          
          <div class="mdl-textfield mdl-js-textfield">
            <input v-model="password" class="mdl-textfield__input" type="password" id="register-password">
            <label class="mdl-textfield__label" for="register-password">Password</label>
          </div>
        </div>
        <div class="mdl-grid center-items">
          
          <div class="mdl-textfield mdl-js-textfield">
            <span id="register-error"></span>
          </div>
        </div>
      </div>
      <div class="mdl-dialog__actions">
        <button @click="closeRegister" type="button" class="mdl-button close">Cancel</button>
        <button @click="register" type="button" class="mdl-button">Register</button>
      </div>
    </dialog>`,
  methods: {
    closeRegister: function() {
      const registerDialog = document.querySelector("#register-dialog");
      dialogPolyfill.registerDialog(registerDialog);
      registerDialog.close();
    },
    register: function() {
      let options = { username: this.username, password: this.password };

      hoodie.account
        .signUp(options)
        .then(account => {
          return hoodie.account.signIn(options);
        })
        .then(account => {
          this.toggleLoggedIn();
          this.closeRegister();
          return account;
        })
        .catch(error => {
          console.log(error);
          document.querySelector("#register-error").innerHTML =
            "Error occured on Registration";
        });
    }
  }
});
