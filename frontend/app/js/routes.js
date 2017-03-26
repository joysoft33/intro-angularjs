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
        recipes: ['RecipesService', function (RecipesService) {
          return RecipesService.getAll();
        }]
      }
    })
    .state({
      name: 'create',
      url: '/views/create',
      component: 'recipeCreate'
    })
    .state({
      name: 'show',
      url: '/view/show/{id}',
      component: 'recipeShow',
      resolve: {
        recipes: ['RecipesService', '$stateParams', function (RecipesService, $stateParams) {
          return RecipesService.getById($stateParams.id);
        }]
      }
    });

  $urlRouterProvider.otherwise('/views/list');
};