'use strict';

/**
 * The recipeShow component
 */
module.exports = {

  templateUrl: '/views/show.html',

  bindings: {
    recipe: '<'
  },

  controller: function (RecipesService, $state) {
    'ngInject';

    //
    this.save = (recipe) => {
      RecipesService.save(recipe).then((items) => {
        $state.go('list');
      }).catch((err) => {});
    };
  }

};