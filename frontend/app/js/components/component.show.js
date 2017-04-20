'use strict';

/**
 * The recipeShow component
 */
module.exports = {

  templateUrl: '/app/views/show.html',

  bindings: {
    recipe: '<'
  },

  controller: function (RecipesService, $state) {
    'ngInject';

    // Save the modified recipe
    this.saveRecipe = (recipe) => {
      RecipesService.save(recipe).then((items) => {
        $state.go('list');
      }).catch((err) => {});
    };
  }

};