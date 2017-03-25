'use strict';

/**
 * The recipeshow component
 */
angular.module('recipes.components').component("recipeShow", {

  templateUrl: '/views/show.html',

  bindings: {
    recipe: '<'
  },

  controller: ['RecipesService', '$state',

    function (RecipesService, $state) {

      var vm = this;

      vm.$onInit = () => {
        vm.recipe = {};
      };

      // vm.save = (recipe) => {
      //   RecipesService.save(recipe).then((items) => {
      //     $state.go('list');
      //   }).catch((err) => {});
      // };

    }
  ]
});