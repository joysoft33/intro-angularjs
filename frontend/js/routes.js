'use strict';

const app = angular.module('recipesApp');

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('list', {
      url: '/list',
      template: '<recipes-list></recipes-list>'
    })
    .state('create', {
      url: '/create',
      template: '<recipe-create></recipe-create>'
    });

  $urlRouterProvider.otherwise('/list');

}]);