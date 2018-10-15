const vm = new Vue({
  el: "#app",
  data: {
    list: [],
    isLoggedIn: false
  },
  methods: {
    toggleLoggedIn: function() {
      this.isLoggedIn = !this.isLoggedIn;
    }
  },
  created() {
    hoodie.store
      .withIdPrefix("list")
      .findAll()
      .then(savedList => (vm.list = savedList));

    hoodie.account.get("session").then(function(session) {
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
});
