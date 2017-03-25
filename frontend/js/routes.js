'use strict';

const app = angular.module('recipesApp');

app.config(['$stateProvider', '$urlRouterProvider',

  function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('list', {
        url: '/views/list',
        template: '<recipes-list recipes="$resolve.recipes"></recipes-list>',
        resolve: {
          recipes: ['RecipesService', function (RecipesService) {
            return RecipesService.get();
          }]
        }
      })
      .state('create', {
        url: '/views/create',
        template: '<recipe-create></recipe-create>'
      })
      .state('show', {
        url: '/view/show/:pageName',
        template: '<recipe-show></recipe-show>'
      });

    $urlRouterProvider.otherwise('/views/list');
  }

]);