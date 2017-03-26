'use strict';

/**
 * The recipes app routes
 */
module.exports = function ($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state({
      name: 'list',
      url: '/views/list',
      component: 'recipesList',
      resolve: {
        recipes: function (RecipesService) {
          return RecipesService.getAll();
        }
      }
    })
    .state({
      name: 'create',
      url: '/views/create',
      component: 'recipeCreate'
    })
    .state({
      name: 'show',
      url: '/views/show/{id}',
      component: 'recipeShow',
      resolve: {
        recipes: function (RecipesService, $stateParams) {
          return RecipesService.getById($stateParams.id);
        }
      }
    });

  $urlRouterProvider.otherwise('/views/list');
};