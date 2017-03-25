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

      // Save the new recipe
      this.save = (recipe) => {
        RecipesService.save(recipe).then((items) => {
          $state.go('list');
        }).catch((err) => {});
      };
    }
  ]
});