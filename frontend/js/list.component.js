'use strict';

/**
 * The recipesList component
 */
angular.module('recipes.components').component("recipesList", {

  templateUrl: '/views/list.html',

  bindings: {
    recipes: '<',
  },

  controller: ['RecipesService',

    function (RecipesService) {

      // Remove an existing recipe
      this.removeRecipe = (recipe) => {
        RecipesService.delete(recipe).then(() => {
          this.recipes.splice(this.recipes.indexOf(recipe), 1);
        }).catch((err) => {});
      };
    }
  ]
});