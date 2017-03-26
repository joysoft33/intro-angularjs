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

    this.a = this.recipe;
    
    //
    this.save = (recipe) => {
      RecipesService.save(recipe).then((items) => {
        $state.go('list');
      }).catch((err) => {});
    };
  }

};