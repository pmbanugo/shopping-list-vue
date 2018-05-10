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
          name: "",
          cost: "",
          quantity: "",
          items: [],
          isLoggedIn: false
        },
        computed: {
          // a computed getter
          total: function total() {
            // `this` points to the vm instance
            return this.items.reduce(function (accumulator, currentValue) {
              return accumulator + currentValue.subTotal;
            }, 0);
          }
        },
        methods: {
          toggleLoggedIn: function toggleLoggedIn() {
            this.isLoggedIn = !this.isLoggedIn;
          },
          onSubmit: function onSubmit(event) {
            if (this.name && this.cost && this.quantity) {
              hoodie.store.withIdPrefix("item").add({
                name: this.name,
                cost: this.cost,
                quantity: this.quantity,
                subTotal: this.cost * this.quantity
              });

              this.name = "";
              this.cost = "";
              this.quantity = "";
            } else {
              var snackbarContainer = document.querySelector("#toast");
              snackbarContainer.MaterialSnackbar.showSnackbar({
                message: "All fields are required"
              });
            }
          },

          deleteRow: function deleteRow(itemId) {
            hoodie.store.withIdPrefix("item").remove(itemId);
          },

          saveList: function saveList(event) {
            var _this = this;

            hoodie.store.withIdPrefix("item").findAll().then(function (items) {
              //store the list
              hoodie.store.withIdPrefix("list").add({
                cost: _this.total,
                items: items
              });

              //delete the items
              hoodie.store.withIdPrefix("item").remove(items).then(function () {
                //clear the table
                _this.items = [];

                //notify the user
                var snackbarContainer = document.querySelector("#toast");
                snackbarContainer.MaterialSnackbar.showSnackbar({
                  message: "List saved succesfully"
                });
              }).catch(function (error) {
                //notify the user
                var snackbarContainer = document.querySelector("#toast");
                snackbarContainer.MaterialSnackbar.showSnackbar({
                  message: error.message
                });
              });
            });
          }
        }
      });


      //retrieve items on the current list and display on the page
      hoodie.store.withIdPrefix("item").findAll().then(function (items) {
        return vm.items = items;
      });

      hoodie.store.withIdPrefix("item").on("add", function (item) {
        return vm.items.push(item);
      });

      hoodie.store.withIdPrefix("item").on("remove", function (deletedItem) {
        return vm.items = vm.items.filter(function (item) {
          return item._id !== deletedItem._id;
        });
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