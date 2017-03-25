'use strict';

/**
 * The recipeCreate component
 */
angular.module('recipes.components').component("recipeCreate", {

  templateUrl: '/views/create.html',

  bindings: {
    recipe: '<'
  },

  controller: ['RecipesService', '$state',

    function (RecipesService, $state) {

      var vm = this;

      vm.$onInit = () => {
        vm.recipe = {};
      };

      vm.save = (recipe) => {
        RecipesService.save(recipe).then((items) => {
          $state.go('list');
        }).catch((err) => {});
      };

    }
  ]
});