'use strict';

/**
 * The recipesList component
 */
module.exports = {

  templateUrl: '/app/views/list.html',

  bindings: {
    recipes: '<',
  },

  controller: function (RecipesService) {
    'ngInject';

    // Remove an existing recipe
    this.removeRecipe = (recipe) => {
      RecipesService.delete(recipe).then(() => {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
      }).catch((err) => {});
    };
  }

};