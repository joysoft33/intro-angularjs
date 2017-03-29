'use strict';

/**
 * The recipesList component
 */
angular.module('recipes.components', [])

  .component("recipesList", {

    templateUrl: '/list.html',

    bindings: {
      list: '<',
      query: '@',
      newItem: '@',
      allChecked: '<'
    },

    controller: ['RecipesService', function (RecipesService) {

      this.model = {
        list: [],
        query: '',
        allChecked: false
      };

      this.$onInit = () => {
        this.getAllItems();
      };

      this.getAllItems = () => {
        RecipesService.get().then((items) => {
          this.model.list = items.data;
        }).catch((err) => {});
      };

      // Remove an existing item
      this.removeItem = (item) => {
        RecipesService.delete(item).then((items) => {
          this.model.list.splice(this.model.list.indexOf(item), 1);
        }).catch((err) => {});
      };

      // Toggle items completion flag
      this.markAll = (completed) => {
        this.model.list.forEach((item) => item.completed = !completed);
        this.model.allChecked = !completed;
      };

      // Remove all checked items
      this.clearCompletedItems = () => {
        this.model.list = this.model.list.filter((item) => !item.completed);
      };

    }]
  });