'use strict';

/**
 * The recipeCreate component
 */
module.exports = {

  templateUrl: '/views/create.html',

  bindings: {
    recipe: '<'
  },

  controller: function (RecipesService, $state) {
    'ngInject';

    // Save the new recipe
    this.save = (recipe) => {
      RecipesService.save(recipe).then((items) => {
        $state.go('list');
      }).catch((err) => {});
    };
  }

};