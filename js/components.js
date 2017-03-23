'use strict';

const components = angular.module('recipes.components', []);

/**
 * The recipesList component
 */
components.component("recipesList", {

  templateUrl: '/list.html',

  bindings: {
    list: '<',
    newItem: '@',
    allChecked: '<'
  },

  controller: ['RecipesService', function (RecipesService) {

    var vm = this;

    vm.$onInit = () => {
      
      vm.list = [];
      vm.query = '';
      vm.allChecked = false;

      vm.getAllItems();
    };

    vm.getAllItems = () => {
      RecipesService.get().then((items) => {
        vm.list = items.data;
      }).catch((err) => {
      });
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

  }]
});