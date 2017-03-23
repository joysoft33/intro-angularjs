'use strict';

/**
 * The AngularJS shopping list app
 */
const shoppingListApp = angular.module('shoppingApp', []);

/**
 * The shoppingList component
 */
shoppingListApp.component("shoppingList", {

    templateUrl: '/view.html',

    bindings: {
      list: '<',
      newItem: '@',
      allChecked: '<'
    },

    controller: function () {

      var vm = this;

      vm.$onInit = () => {
        vm.list = [];
        vm.newItem = '';
        vm.allChecked = false;
      };

      // Add a new item
      vm.addItem = () => {
        var item = vm.newItem.trim();
        if (item.length) {
          // Add new item to the items list
          vm.list.push({
            title: vm.newItem,
            completed: false
          });
          // Stay ready for new item input
          vm.newItem = '';
        }
      };

      // Remove an existing item
      vm.removeItem = (item) => {
        vm.list.splice(vm.list.indexOf(item), 1);
      };

      // Toggle items completion flag
      vm.markAll = (completed) => {
        vm.list.forEach(function (item) {
          item.completed = !completed;
        });
        vm.allChecked = !completed;
      };

      // Remove all checked items
      vm.clearCompletedItems = () => {
        vm.list = vm.list.filter(function (item) {
          return !item.completed;
        });
      };

    }
});