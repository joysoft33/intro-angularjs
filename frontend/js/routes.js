'use strict';

const app = angular.module('recipesApp');

app.config(['$stateProvider', '$urlRouterProvider',

  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state({
        name: 'list',
        url: '/views/list',
        component: 'recipesList',
        resolve: {
          recipes: ['RecipesService', function (RecipesService) {
            return RecipesService.get();
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
          recipe: ['RecipesService', '$stateParams', function (RecipesService, $stateParams) {
            return RecipesService.getById($stateParams.id);
          }]
        }
      });

    $urlRouterProvider.otherwise('/views/list');
  }

]);